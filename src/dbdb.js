import { MongoClient } from "mongodb";

if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = import.meta.env.MONGODB_URI;
const options = {};
let cachedMongo;

const connectToDB = async () => {
  const mongo = await new MongoClient(uri, options).connect();
  return mongo.db("test");
};

export const getDB = async () => {

  if (import.meta.env.NODE_ENV === "development") {
    console.log('we are in dev!!!!!!!!')
    if (!global._mongoConnection) {
      global._mongoConnection = await connectToDB();
      cachedMongo = global._mongoConnection;
    }
    console.info('returning cached mongo')
    return cachedMongo;
  }
  const mongo = await connectToDB();
  return mongo;
};

export const Forms = async () => {
  if (import.meta.env.NODE_ENV === "development") {
    console.log('we are in dev!!!!!!!!')
  } else {
    console.info("NOT IN DEV")
  }
  const db = await getDB();
  return db.collection("forms");
};
