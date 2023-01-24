import React, { useEffect, useState } from "react";
import styles from "./tweets.module.scss";
import Image from "next/image";
import Comments from "../comments/comments";
import { server } from "../../config";

interface Props {
  username: string;
  userId: string;
  description: string;
  mainUserId: string;
  id: string;
  date: string;
}

type filterData = {
  comment: string;
  id: string;
  mainUserId: string;
  _id: string;
};

const Tweets: React.FC<Props> = ({
  username,
  userId,
  description,
  mainUserId,
  id,
  date,
}) => {
  const [heart, setHeart] = useState<boolean>(false);
  const [comments, setComments] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [data, setData] = useState<filterData[]>([]);

  const commentHandler = async () => {
    setComments(!comments);
  };

  const getData = async () => {
    return fetch(`${server}/api/comments/comment`)
      .then((response) => response.json())
      .then((data) => setData(data.comments));
  };

  useEffect(() => {
    getData();
  }, [comment]);

  const filterComment = data.filter((comment: filterData) => comment.id === id);

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  }
  const time = convertMsToTime(new Date().valueOf() - new Date(date).valueOf());

  return (
    <>
      <div className={styles.tweets}>
        <div className={styles.tweets__profile}></div>
        <div className={styles.tweets__info}>
          <div className={styles.tweets__title}>
            <h3>{username}</h3>
            <span>@{userId}</span>
            <span className={styles.tweets__month}>{time}</span>
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
            onClick={commentHandler}
          />
          <span className={styles.tweets__comments__number}>
            {filterComment.length}
          </span>
        </div>
        <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.heart}
          onClick={() => setHeart(!heart)}
        >
          <path
            color={heart ? "#ff4a59" : "#9CA3AF"}
            fill={heart ? "#ff4a59" : "#fff"}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <Image src="/assets/upload.svg" alt="upload" width={20} height={20} />
      </div>
      {comments && (
        <Comments
          mainUserId={mainUserId}
          id={id}
          data={filterComment}
          comment={comment}
          setComment={setComment}
        />
      )}
    </>
  );
};

export default Tweets;
