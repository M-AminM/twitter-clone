import React from "react";
import styles from "./entry.module.scss";

interface Props {
  inputRef: any;
  passwordRef: any;
  signinHandler: () => void;
  title: string;
  buttonText: string;
}

const Entry: React.FC<Props> = ({
  inputRef,
  passwordRef,
  signinHandler,
  title,
  buttonText,
}) => {
  return (
    <>
      <div className={styles.login__or}>or</div>
      <h1 className={styles.login__title}>{title}</h1>
      <input
        className={styles.login__input}
        placeholder="phone, email address or username"
        type="text"
        ref={inputRef}
      />
      <input
        className={styles.login__input}
        placeholder="password"
        type="password"
        ref={passwordRef}
      />

      <button className={styles.login__button} onClick={signinHandler}>
        {buttonText}
      </button>
    </>
  );
};

export default Entry;
