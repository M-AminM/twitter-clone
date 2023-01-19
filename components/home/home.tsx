import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import Tweets from "../tweets/tweets";
import { TweetsData } from "@/data/tweets";

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

      <div className={styles.home___profile}>
        <Image
          className={styles.home__image}
          src="/assets/tate.png"
          alt=""
          width={20}
          height={20}
        />

        <div style={{ width: "100%" }}>
          <input
            className={styles.home__input}
            placeholder="What's happening?"
          />

          <div className={styles.home__upload}>
            <div className={styles.home__icons}>
              <Image src="/assets/photo.svg" alt="" width={20} height={20} />
              <Image
                src="/assets/magnifying2.svg"
                alt=""
                width={20}
                height={20}
              />
              <Image src="/assets/happy.svg" alt="" width={20} height={20} />
              <Image src="/assets/calendar.svg" alt="" width={20} height={20} />
              <Image src="/assets/location.svg" alt="" width={20} height={20} />
            </div>
            <button className={styles.home__uploadButton}>Tweets</button>
          </div>
        </div>
      </div>

      {TweetsData.map((tweet) => (
        <Tweets
          username={tweet.username}
          userId={tweet.useId}
          description={tweet.description}
        />
      ))}
    </section>
  );
};

export default MainHome;
