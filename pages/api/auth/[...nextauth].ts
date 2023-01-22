// @ts-nocheck
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      async authorize(credentials: any) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        // console.log(usersCollection);

        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        console.log(user);

        if (!user) {
          client.close();
          throw new Error("No user found !");
        }

        // const isValid = await compare(credentials.password, user.password);

        // if (!isValid) {
        //   client.close();
        //   throw new Error("Could not log you in !");
        // }

        client.close();
        return {
          email: user,
        };
      },
    }),
  ],
  secret: process.env.JWT_SECRET as string,
});
