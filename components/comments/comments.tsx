import React, { useState } from "react";
import styles from "./comments.module.scss";

interface Props {
  username: string;
  userId: string;
  description: string;
  mainUserId: string; 
  id: string;
  data: any;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
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
}) => {
  // console.log(username, userId, description);
  // console.log(mainUserId);
  // console.log(id);

  const commentHandler = () => {
    const res = fetch("/api/comments/comment", {
      method: "POST",
      body: JSON.stringify({ comment, mainUserId, id }),
    });
    setComment("");
  };

  console.log(data);

  return (
    <div className={styles.comments}>
      <div className={styles.comments__comment}>
        <input
          onChange={(e) => setComment(e.target.value)}
          className={styles.comments__input}
          value={comment}
        />
        <button onClick={commentHandler} className={styles.comments__submit}>
          Comment
        </button>
      </div>

      {data.map((d: any) => (
        <div className={styles.comments__detail} key={d._id}>
          <p>comment: {d.comment}</p>
          <p>user: {d.mainUserId}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
