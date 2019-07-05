import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LON_IN } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const email = useInput("", "email");
  const firstName = useInput("");
  const lastName = useInput("");
  const requestSecret = useMutation(LON_IN, {
    variables: {
      email: email.value
    }
  });
  const onLogIn = e => {
    e.preventDefault();
    if (email.value !== "") {
      requestSecret(email.value);
      alert("이메일 보냄");
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
      onLogIn={onLogIn}
    />
  );
};
