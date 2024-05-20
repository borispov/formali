import { Google } from 'arctic'

export const googleAuth = new Google(
	import.meta.env.GOOGLE_CLIENT_ID,
	import.meta.env.GOOGLE_CLIENT_SECRET,
	'http://localhost:4321/login/google/callback'
)

import { Lucia, TimeSpan } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { clientPromise } from "./db";
import { Collection } from "mongodb";

const client = await clientPromise
await client.connect();

const db = client.db();
const User = db.collection("users") as Collection<UserDoc>;
const Session = db.collection("sessions") as Collection<Session>;

const adapter = new MongodbAdapter(Session, User);

export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(1, 'w'), // 2 weeks
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
		}
	}
})

interface UserDoc {
	_id: string;
}

interface Session {
	_id: string;
	expires_at: Date;
	user_id: string;
}
