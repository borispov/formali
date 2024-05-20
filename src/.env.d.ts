// src/env.d.ts
/// <reference types="astro/client" />
import PocketBase from 'pocketbase';

declare namespace App {
	interface Locals {
		pb: PocketBase;
		id: string;
		email: string;
		avatar: string;
	}
}
