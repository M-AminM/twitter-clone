import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://nextjs:qS9zN8jW3ydJ7Vrk@cluster0.z5lfnko.mongodb.net/twitter?retryWrites=true&w=majority"
  );

  return client;
};
