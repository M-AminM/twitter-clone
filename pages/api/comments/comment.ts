import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    const { comment, mainUserId, id } = JSON.parse(data);
    console.log(comment, mainUserId, id);

    const client = await connectToDatabase();
    const db = client.db();
    db.collection("comments").insertOne({
      comment: comment,
      mainUserId: mainUserId,
      id: id,
    });
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();

    const documents = await db.collection("comments").find().toArray();

    res.status(200).json({ comments: documents });
  }
};

export default handler;
