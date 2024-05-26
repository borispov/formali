// src/env.d.ts
/// <reference types="astro/client" />

declare global {
  interface Locals {
		pb: import('pocketbase').PocketBase;
		id: string;
		email: string;
		avatar: string;
  }
}

declare namespace App {
	interface Locals {
		pb: import('pocketbase').PocketBase;
		id: string;
		email: string;
		avatar: string;
	}
}

interface ImportMetaEnv {
  /** Pocketbase API username */
  readonly PB_EMAIL: string;
  /** Pocketbase API password */
  readonly PB_PASSWORD: string;
  /** Pocketbase API URL */
  readonly PB_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
