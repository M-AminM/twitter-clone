"use client";
import React from "react";
import styles from "../register.module.scss";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Entry from "@/components/entry/entry";

const Signup = () => {
  return (
    <div className={styles.register}>
      <button onClick={() => signIn()} className={styles.register__google}>
        <Image src="/assets/google.png " alt="google" width={25} height={25} />
        Sign up with Google
      </button>
      <Entry title="Join Twitter today" buttonText="Sign up" />
    </div>
  );
};

export default Signup;
