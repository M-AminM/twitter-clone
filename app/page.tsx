"use client";
import Menu from "@/components/menu/menu";
import MainHome from "@/components/home/home";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import Tweets from "@/components/tweetsNews/tweets";
import Login from "@/components/login/login";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
      <Menu />
      <MainHome session={session} />
      <Tweets />
      <Login />
    </main>
  );
}
