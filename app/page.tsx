"use client";
import Menu from "@/components/menu/menu";
import MainHome from "@/components/home/home";
import styles from "./page.module.scss";
import Tweets from "@/components/tweetsNews/tweets";
import Login from "@/components/login/login";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      <Menu session={session} />
      <MainHome session={session} />
      <Tweets />
      {!session && <Login />}
    </main>
  );
}
