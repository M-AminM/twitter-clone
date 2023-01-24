import React from "react";
import styles from "./entry.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";

interface Props {
  title: string;
  buttonText: string;
}

type Inputs = {
  id: string;
  email: string;
  username: string;
  password: string;
  input?: string;
};

type FromInputs = {
  placeholder: string;
  type: string;
  id: number;
}[];

const Entry: React.FC<Props> = ({ title, buttonText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    reset();
    if (buttonText === "Sign in") {
      console.log(data);

      const result = await signIn("credentials", {
        redirect: false,
        email: data.input,
        password: data.password,
      });

      if (result?.error === null) {
        window.location.href = "/";
      }
    }

    if (buttonText === "Sign up") {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      }).then(async (response) => {
        console.log(response);

        if (response.ok) {
          const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
          });

        } else {
          console.log("Already created");
        }
      });
    }
  };

  const signupInput: FromInputs = [
    { placeholder: "id", type: "text", id: 1 },
    { placeholder: "email", type: "email", id: 2 },
    { placeholder: "username", type: "text", id: 3 },
    { placeholder: "password", type: "password", id: 4 },
  ];

  const loginInput: FromInputs = [
    { placeholder: "input", type: "text", id: 1 },
    { placeholder: "password", type: "password", id: 2 },
  ];

  return (
    <>
      <div className={styles.login__or}>or</div>
      <h1 className={styles.login__title}>{title}</h1>
      <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
        {(buttonText === "Sign in" ? loginInput : signupInput).map(
          (input: any) => (
            <input
              className={styles.login__input}
              placeholder={input.placeholder}
              type={input.type}
              {...register(input.placeholder)}
              key={input.id}
            />
          )
        )}
        <button className={styles.login__button}>{buttonText}</button>
      </form>
    </>
  );
};

export default Entry;
