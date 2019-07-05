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

  const requestSecret = useMutation(LON_IN, {
    update: (_, result) => {
      console.log(result);
      const { requestSecret } = result.data;
      console.log(requestSecret);
      if (!requestSecret) {
        toast(`you can logIn before signUp!!!`);
        setTimeout(() => {
          setAction("signUp");
        }, 3000);
      }
    },
    variables: {
      email: email.value
    }
  });

  const createAccount = useMutation(CREATE_ACCOUNT, {
    update: (_, result) => {
      console.log(result);
    },
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(email.value);
    if (email.value !== "") {
      if (action === "logIn") {
        requestSecret(email.value);
      } else if (action === "signUp") {
        createAccount();
      }
    } else {
      toast(`ut your correct email!!!`);
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
