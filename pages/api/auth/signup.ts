import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    const { phone, email, username, password } = JSON.parse(data).data;
    const client = await connectToDatabase();
    const db = client.db();
    db.collection("users").insertOne({
      phone: phone,
      email: email,
      username: username,
      password: password,
    });
  }
};

export default handler;
