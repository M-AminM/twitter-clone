import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";

const MainHome = () => {
  return (
    <section className={styles.home}>
      <div className={styles.home__header}>
        <h1>Home</h1>
        <Image
          src="/assets/refresh.svg"
          alt="refresh"
          width={35}
          height={30}
          className={styles.home__refresh}
        />
      </div>
    </section>
  );
};

export default MainHome;
