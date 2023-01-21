"use client";
import React, { useRef } from "react";
import styles from "../login/login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Entry from "@/components/entry/entry";

const Signup = () => {
  const { data: session }: any = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signinHandler = () => {
    // console.log(inputRef.current?.value);
    // console.log(passwordRef.current?.value);

    const res = fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        userInfo: inputRef.current?.value,
        password: passwordRef.current?.value,
      }),
    });
  };
  return (
    <div className={styles.login}>
      <button onClick={() => signIn()} className={styles.login__google}>
        <Image src="/assets/google.png " alt="google" width={25} height={25} />
        Sign up with Google
      </button>
      <Entry
        inputRef={inputRef}
        passwordRef={passwordRef}
        signinHandler={signinHandler}
        title="Join Twitter today"
        buttonText="Sign up"
      />
    </div>
  );
};

export default Signup;
