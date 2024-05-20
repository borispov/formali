import { MongoClient, UUID } from 'mongodb'


if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = import.meta.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  pkFactory: { createPk: () => new UUID().toBinary() }
};

let client;
export let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
  console.log('from cachea')
} else {
  // In production mode, it's best to not use a global variable.
  console.log('from cachea')
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const formsCollection = async () => {
  const client = await clientPromise;
  const db = client.db('formali')
  // db.dropCollection('forms')
  // db.collection('forms').insertOne({ ...sampleFormData })
  return db.collection("forms");
};
