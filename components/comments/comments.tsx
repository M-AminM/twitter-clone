import React, { useEffect, useRef, useState } from "react";
import styles from "./comments.module.scss";

interface Props {
  username: string;
  userId: string;
  description: string;
  mainUserId: string; //اونی که login کردیم هست
  id: string;
  data: any;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  date: string;
}

const Comments: React.FC<Props> = ({
  username,
  userId,
  description,
  mainUserId,
  id,
  data,
  comment,
  setComment,
  date,
}) => {
  const commentHandler = () => {
    const res = fetch("/api/comments/comment", {
      method: "POST",
      body: JSON.stringify({ comment, mainUserId, id }),
    });
    setComment("");
  };

  const submitRef = useRef<any>();

  useEffect(() => {
    if (comment) submitRef.current.style.background = "#08a8e2";
    else submitRef.current.style.background = "#99def8";
  }, [comment]);


  // const d1 = new Date();
  // console.log(d1);
  // console.log(date);

  // const result =  - d1.getTime();

  return (
    <div className={styles.comments}>
      <div className={styles.comments__comment}>
        <input
          onChange={(e) => setComment(e.target.value)}
          className={styles.comments__input}
          value={comment}
        />
        <button
          ref={submitRef}
          onClick={commentHandler}
          className={styles.comments__submit}
        >
          Comment
        </button>
      </div>

      {data.map(
        (info: { comment: string; _id: string; mainUserId: string }) => (
          <div className={styles.comments__main} key={info._id}>
            <div className={styles.comments__profile}></div>
            <div className={styles.comments__detail} key={info._id}>
              <h2 className={styles.comments__name}>{info.mainUserId}</h2>
              <p className={styles.comments__info}>{info.comment}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Comments;
