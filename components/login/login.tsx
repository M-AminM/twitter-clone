import Link from "next/link";
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
        <Link href="/login" className={styles.signin__buttons__login}>Log in</Link>
        <Link href="/signup" className={styles.signin__buttons__signup}>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
