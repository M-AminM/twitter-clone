"use client";
import React from "react";
import styles from "../register.module.scss";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Entry from "@/components/entry/entry";

const Login = () => {
  return (
    <div className={styles.register}>
      <button onClick={() => signIn()} className={styles.register__google}>
        <Image src="/assets/google.png " alt="google" width={25} height={25} />
        Sign in with Google
      </button>
      <Entry title="Sign in to Twitter" buttonText="Sign in" />
    </div>
  );
};

export default Login;
