import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    const { id, email, username, password } = JSON.parse(data).data;
    const client = await connectToDatabase();
    const db = client.db();
    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User exists already! " });
      client.close();
      return;
    }

    db.collection("users").insertOne({
      userId: id,
      email: email,
      username: username,
      password: password,
    });

    res.status(201).json({ message: "Created user!" });
  }
};

export default handler;
