import { Inter } from "@next/font/google";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={inter.className}>Hello Twitter</h1>
    </main>
  );
}
