import React, { useEffect, useRef } from "react";
import styles from "./comments.module.scss";

type data = {
  comment: string;
  id: string;
  mainUserId: string;
  _id: string;
};

interface Props {
  mainUserId: string;
  id: string;
  data: data[];
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  session: any;
}

const Comments: React.FC<Props> = ({
  mainUserId,
  id,
  data,
  comment,
  setComment,
  session,
}) => {
  const commentHandler = () => {
    if (session) {
      const res = fetch("/api/comments/comment", {
        method: "POST",
        body: JSON.stringify({ comment, mainUserId, id }),
      });
      setComment("");
    } else {
      alert("You should login first !");
    }
  };

  const submitRef = useRef<any>();

  useEffect(() => {
    if (comment) submitRef.current.style.background = "#08a8e2";
    else submitRef.current.style.background = "#99def8";
  }, [comment]);

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
