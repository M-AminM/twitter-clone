"use client";
import React from "react";
import styles from "../login/login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Entry from "@/components/entry/entry";

const Signup = () => {
  const { data: session }: any = useSession();
  console.log(session);
  
  return (
    <div className={styles.login}>
      <button onClick={() => signIn()} className={styles.login__google}>
        <Image src="/assets/google.png " alt="google" width={25} height={25} />
        Sign up with Google
      </button>
      <Entry title="Join Twitter today" buttonText="Sign up" />
    </div>
  );
};

export default Signup;
