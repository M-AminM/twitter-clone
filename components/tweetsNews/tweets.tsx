import React from "react";
import styles from "./tweets.module.scss";
import Image from "next/image";

const Tweets = () => {
  return (
    <section className={styles.tweets}>
      <div className={styles.tweets__search}>
        <Image
          src="/assets/magnifying.svg"
          className={styles.tweets__magnifying}
          alt="magnifying"
          width={30}
          height={30}
        />
        <input className={styles.tweets__input} placeholder="Search Twitter" />
      </div>
    </section>
  );
};

export default Tweets;
