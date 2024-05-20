// src/middleware/index.ts
import PocketBase from 'pocketbase';

import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async ({locals, request}, next: () => any) => {
  locals.pb = new PocketBase('http://localhost:8090/')
  locals.pb.authStore.loadFromCookie(request.headers.get('cookie') || '');

  if (request.url.includes('logout')) {
    locals.pb.authStore.clear();
    const response = await next();
    response.headers.append('set-cookie', locals.pb.authStore.exportToCookie());
    return response;
  }

    try {
      const isValid = locals.pb.authStore.isValid
      isValid && await locals.pb.collection('users').authRefresh()
      if (!isValid) throw new Error("Unauthorized")
      console.log("INCOMING REQUEST FROM: ", request.url)
      console.log("Authenticated User: ", isValid)
    } catch (_) {
        console.log("Authenticated User: ", false)
        locals.pb.authStore.clear();
    }

    const response = await next();
    response.headers.append('set-cookie', locals.pb.authStore.exportToCookie());
    return response;
});
