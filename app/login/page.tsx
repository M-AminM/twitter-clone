"use client";
import React from "react";
import styles from "./login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Entry from "@/components/entry/entry";

const Login = () => {
  const { data: session }: any = useSession();

  return (
    <div className={styles.login}>
      <button onClick={() => signIn()} className={styles.login__google}>
        <Image src="/assets/google.png " alt="google" width={25} height={25} />
        Sign in with Google
      </button>
      <Entry
        title="Sign in to Twitter"
        buttonText="Sign in"
      />
    </div>
  );
};

export default Login;
