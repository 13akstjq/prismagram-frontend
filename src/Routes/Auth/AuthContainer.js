import React, { useState } from "react";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import {
  LON_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN
} from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const email = useInput("13akstjq@naver.com", "email");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const requestSecretMutation = useMutation(LON_IN, {
    variables: {
      email: email.value
    }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });

  const logInMutation = useMutation(LOCAL_LOG_IN);
  const onSubmit = async e => {
    e.preventDefault();
    if (email.value !== "") {
      console.log(action);
      if (action === "logIn") {
        try {
          const { data: requestSecret } = await requestSecretMutation(
            email.value
          ); // prisma에서 데이터를 받아오는 것은 비동기적으로 동작하기 떄문에 await필수
          if (requestSecret) {
            toast.success("Check your email for your login secret");
            setTimeout(() => {
              setAction("confirm");
            }, 2000);
          } else {
            toast.error("you don't have an account!!");
            setTimeout(() => {
              setAction("signUp");
            }, 2000);
          }
        } catch {
          toast.error("Can't request secret, try again!!");
        }
      } else if (action === "signUp") {
        console.log("singUp");
        if (
          email.value !== "" &&
          username.value !== "" &&
          firstName.value !== "" &&
          lastName.value !== ""
        ) {
          try {
            const { data: createAccount } = await createAccountMutation();
            if (createAccount) {
              toast.success("Success createAccount!! ");
              setTimeout(() => {
                setAction("logIn");
                email.value = "";
              }, 2000);
            }
          } catch (e) {
            toast.error(e.message);
          }
        }
      } else if (action === "confirm") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          console.log(token);
          if (token !== "" && token !== undefined) {
            toast.success("Success confirm secret!! ");
            //to do login
            logInMutation();
          } else {
            toast.error("Paste your correct scret!!");
          }
        } catch {
          toast.error("Paste your correct scret!!");
        }
      }
    } else {
      toast.error(`put your correct email!!!`);
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      email={email}
      firstName={firstName}
      lastName={lastName}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
