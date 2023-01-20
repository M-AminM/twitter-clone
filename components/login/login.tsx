import React from "react";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.signin__info}>
        <h1 className={styles.signin__title}>Don't miss what's happening</h1>
        <p className={styles.signin__des}>
          People on Twitter are the first to know.
        </p>
      </div>

      <div className={styles.signin__buttons}>
        <button className={styles.signin__buttons__login}>Log in</button>
        <button className={styles.signin__buttons__signup}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
