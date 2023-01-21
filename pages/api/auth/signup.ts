import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    // const { userInfo, password } = JSON.parse(data);
    console.log(data);
  }
};

export default handler;
