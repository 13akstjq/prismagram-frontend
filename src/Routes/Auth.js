import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
`;

export default () => {
  const [action, setAction] = useState("logIn");
  //   console.log(action);
  return (
    <Wrapper>
      <Box>{action === "logIn" ? "Log In" : "Sign Up"}</Box>
    </Wrapper>
  );
};
