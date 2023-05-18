import { MongoClient } from "mongodb";

const options = { useNewUrlParser: true };

const connectDB = new MongoClient(
  process.env.NEXT_PUBLIC_MONGODB_KEY
).connect();

export { connectDB };
