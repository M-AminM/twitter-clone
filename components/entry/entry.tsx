import React from "react";
import styles from "./entry.module.scss";
import { useForm, SubmitHandler  } from "react-hook-form";

interface Props {
  title: string;
  buttonText: string;
}
type Inputs = {
  phone: string,
  email: string,
  username: string,
  password: string,
};

const Entry: React.FC<Props> = ({ title, buttonText}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    reset();
    const res = fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
    });
  }

  return (
    <>
      <div className={styles.login__or}>or</div>
      <h1 className={styles.login__title}>{title}</h1>
      <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.login__input}
          placeholder="phone"
          type="text"
          {...register("phone")}
        />
        <input
          className={styles.login__input}
          placeholder="email address"
          type="text"
          {...register("email")}
        />
        <input
          className={styles.login__input}
          placeholder="username"
          type="text"
          {...register("username")}
        />
        <input
          className={styles.login__input}
          placeholder="password"
          type="password"
          {...register("password")}
        />

        <button className={styles.login__button}>
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default Entry;
