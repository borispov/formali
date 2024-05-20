import { googleAuth, lucia } from "$lib/auth";
import { OAuth2RequestError, generateCodeVerifier } from "arctic";
import { generateId } from "lucia";

import type { APIContext } from "astro";
import type { DatabaseUser } from "lucia";

import { clientPromise } from "../../../db";

const client = await clientPromise
await client.connect();
const db = client.db();

export async function GET(context: APIContext): Promise<Response> {
	const code = context.url.searchParams.get("code");
	const state = context.url.searchParams.get("state");

	const codeVerifier  = context.cookies.get("google_code_verifier")?.value ?? null;
	const storedState = context.cookies.get("google_state")?.value ?? null;
	if (!code || !state || !storedState || state !== storedState) {
		console.log(`Some Key Auth Part is missing!`)
		return new Response(null, {
			status: 400
		});
	}

	try {
		const tokens = await googleAuth.validateAuthorizationCode(code, codeVerifier);
		const googleUserResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const googleUser: GoogleUser = await googleUserResponse.json();

		const existingUser = await db.collection('users').findOne({ googleId: googleUser.sub })

		if (existingUser) {
			console.log(`user exists, redirecting ... \n`)
			const session = await lucia.createSession(existingUser.id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			return context.redirect("/dashboard");
		}
		// else...

		const userId = generateId(15);
		// maybe model a user correctly,?>!
		const newUser = await db.collection('users').insertOne({
			id: userId,
			googleId: googleUser.sub,
			username: googleUser.name,
			profilePic: googleUser.picture,
			subscriptionId: 0,
		})

		console.log(`created new user\n`)

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		return context.redirect("/dashboard");

	} catch (e) {
		if (e instanceof OAuth2RequestError && e.message === "bad_verification_code") {
			// invalid code
			return new Response(null, {
				status: 400
			});
		}
		return new Response(JSON.stringify(e), {
			status: 500
		});
	}
}

interface GoogleUser {
	sub: string;
	name: string;
	picture: string;
}
