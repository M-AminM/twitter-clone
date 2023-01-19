import React from "react";
import styles from "./tweets.module.scss";
import Image from "next/image";

interface Props {
  username: string;
  userId: string;
  description: string;
}

const Tweets: React.FC<Props> = ({ username, userId, description }) => {
  return (
    <>
      <div className={styles.tweets}>
        <div className={styles.tweets__profile}></div>
        <div className={styles.tweets__info}>
          <div className={styles.tweets__title}>
            <h3>{username}</h3>
            <span>@{userId}</span>
            <span>. 4 months ago</span>
          </div>

          <p className={styles.tweets__des}>{description}</p>
        </div>
      </div>
      <div className={styles.tweets__icons}>
        <div className={styles.tweets__comments}>
          <Image
            src="/assets/comments.svg"
            alt="comments"
            width={20}
            height={20}
          />
          <span className={styles.tweets__comments__number}>0</span>
        </div>
        <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
        <Image src="/assets/heart.svg" alt="heart" width={20} height={20} />
        <Image src="/assets/upload.svg" alt="upload" width={20} height={20} />
      </div>
    </>
  );
};

export default Tweets;
