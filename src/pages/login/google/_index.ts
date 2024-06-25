import { generateState, generateCodeVerifier } from "arctic";

import { googleAuth } from "$lib/auth";

import type { APIContext } from "astro";

export async function GET(context: APIContext): Promise<Response> {

	console.log(`LOCALS PB: `, context.locals.pb)

	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const url = await googleAuth.createAuthorizationURL(state, codeVerifier, {
		scopes: ["https://www.googleapis.com/auth/userinfo.profile"]
	});

	console.log(`redirect URL: ${url}\n`)

	context.cookies.set("google_state", state, {
		path: "/",
		secure: false, // import.meta.env.PROD
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax"
	});

	context.cookies.set("google_code_verifier", codeVerifier, {
		path: "/",
		secure: false, // import.meta.env.PROD
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax"
	});

	return context.redirect(url.toString() + '&prompt=select_account');
	// return context.redirect(url.toString());
}
