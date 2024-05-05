import { Google } from 'arctic'

import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { clientPromise } from "./db";

import { Collection, MongoClient } from "mongodb";

const client = await clientPromise
await client.connect();

const db = client.db();
const User = db.collection("users") as Collection<UserDoc>;
const Session = db.collection("sessions") as Collection<Session>;

const adapter = new MongodbAdapter(Session, User);

interface UserDoc {
	_id: string;
}

interface Session {
	_id: string;
	expires_at: Date;
	user_id: string;
}
