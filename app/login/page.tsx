"use client";
import React from "react";
import styles from "./login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  const { data: session }: any = useSession();

  console.log();

  //   const session = useSession();
  // if (session) {
  //   return (
  //     <div>
  //       <p>welcome {session.user?.name}</p>
  //       {/* <img src={session.user?.image} alt="" /> */}
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p>you ar not login</p>
  //       <button onClick={() => signIn()}>Sign in</button>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.login}>
      {session ? (
        <div>
          <p>welcome {session.user?.name}</p>
          {/* <img src={session.user?.image} alt="" /> */}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <>
          <button onClick={() => signIn()} className={styles.login__google}>
            <Image
              src="/assets/google.png "
              alt="google"
              width={25}
              height={25}
            />
            Sign in with Google
          </button>
          <div className={styles.login__or}>or</div>
          <h1 className={styles.login__title}>Sign in to Twitter</h1>
          <input
            className={styles.login__input}
            placeholder="phone, email address or username"
          />
          <input className={styles.login__input} placeholder="password" />

          <button className={styles.login__button}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Login;
