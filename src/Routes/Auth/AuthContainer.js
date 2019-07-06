import React, { useState } from "react";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LON_IN, CREATE_ACCOUNT } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const email = useInput("13akstjq@naver.com", "email");
  const firstName = useInput("");
  const lastName = useInput("");

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

  const onSubmit = async e => {
    e.preventDefault();
    console.log(email.value);
    if (email.value !== "") {
      console.log(action);
      if (action === "logIn") {
        try {
          const result = await requestSecretMutation(email.value); // prisma에서 데이터를 받아오는 것은 비동기적으로 동작하기 떄문에 await필수
          const { requestSecret } = result.data;
          if (!requestSecret) {
            toast("you don't have an account!!");
            setTimeout(() => {
              setAction("signUp");
            }, 2000);
          }
        } catch {
          toast("Can't request secret, try again!!");
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
              toast("Success createAccount!! ");
              setTimeout(() => {
                setAction("logIn");
                email.value = "";
              }, 2000);
            }
          } catch (e) {
            toast(e.message);
          }
        }
      }
    } else {
      toast(`put your correct email!!!`);
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
      onSubmit={onSubmit}
    />
  );
};
