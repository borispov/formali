import PocketBase from "pocketbase";

const PB_URL = import.meta.env.PROD ? import.meta.env.PB_URL : 'http://localhost:8090/'

const pb = new PocketBase(PB_URL);

// This optimization ensures that you only re-authenticate when necessary, reducing the load on your PocketBase server.
export const authorizePB = async () => {
  if (!pb.authStore.isValid) {
    await pb.admins.authWithPassword(import.meta.env.PB_EMAIL, import.meta.env.PB_PASSWORD);
  }

  return pb;
};