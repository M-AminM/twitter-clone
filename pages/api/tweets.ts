import { connectToDatabase } from "@/lib/db";

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    const { tweet, username, userId } = JSON.parse(data);
    const client = await connectToDatabase();
    const db = client.db();
    db.collection("tweets").insertOne({
      tweet: tweet,
      username: username,
      userId: userId,
      date: new Date(),
    });
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    const documents = await db.collection("tweets").find().toArray();

    res.status(200).json({ tweets: documents });
  }
};

export default handler;
