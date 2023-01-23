// "use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import Tweets from "../tweets/tweets";
import { TweetsData } from "@/data/tweets";
import { server } from "../../config";

interface Props {
  session: any;
}
const MainHome: React.FC<Props> = ({ session }) => {
  const [input, setInput] = useState<any>("");
  const [tweets, setTweets] = useState([]);
  const tweetsRef = useRef<any>();

  // console.log(session.user);
  let data = session?.user?.email;


  // console.log(session.user.name); server side :))

  useEffect(() => {
    if (input) tweetsRef.current.style.background = "#08a8e2";
    else tweetsRef.current.style.background = "#99def8";
  }, [input]);

  const sendData = async () => {
    setInput("");
    const response = await fetch("/api/tweets", {
      method: "POST",
      body: JSON.stringify({
        tweet: input,
        username: data?.username,
        userId: data?.userId,
      }),
    });
  };

  const getData = async () => {
    return fetch(`${server}/api/tweets`)
      .then((response) => response.json())
      .then((data) => setTweets(data.tweets));
  };

  useEffect(() => {
    getData();
  }, [input]);
  

  
  
  const reversedTweets = [...tweets].reverse();
  return (
    <section className={styles.home}>
      <div className={styles.home__header}>
        <h1>Home</h1>
        <Image
          src="/assets/refresh.svg"
          alt="refresh"
          width={35}
          height={30}
          className={styles.home__refresh}
        />
      </div>

      <div className={styles.home___profile}>
        <Image
          className={styles.home__image}
          src="/assets/tate.png"
          alt=""
          width={20}
          height={20}
        />

        <div style={{ width: "100%" }}>
          <input
            className={styles.home__input}
            placeholder="What's happening?"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <div className={styles.home__upload}>
            <div className={styles.home__icons}>
              <Image src="/assets/photo.svg" alt="" width={20} height={20} />
              <Image
                src="/assets/magnifying2.svg"
                alt=""
                width={20}
                height={20}
              />
              <Image src="/assets/happy.svg" alt="" width={20} height={20} />
              <Image src="/assets/calendar.svg" alt="" width={20} height={20} />
              <Image src="/assets/location.svg" alt="" width={20} height={20} />
            </div>
            <button
              ref={tweetsRef}
              className={styles.home__uploadButton}
              onClick={sendData}
              disabled={!input}
            >
              Tweets
            </button>
          </div>
        </div>
      </div>

      {/* <h1>welcome {session.user?.name}</h1> */}

      {reversedTweets.map((tweet: any) => (
        <Tweets
          username={tweet.username}
          userId={tweet.userId}
          description={tweet.tweet}
          mainUserId={data?.userId}
          key={tweet._id}
          id={tweet._id}
        />
      ))}
    </section>
  );
};

export default MainHome;
