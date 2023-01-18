import Menu from "@/components/menu/menu";
import MainHome from "@/components/home/home";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import Tweets from "@/components/tweets/tweets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <MainHome />
      <Tweets />
    </main>
  );
}
