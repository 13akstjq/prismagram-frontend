import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  border-radius: 0px;
`;

const LoginBox = styled(Box)`
  width: 350px;
  height: 372px;
  margin-bottom: 15px;
`;

const StateChanger = styled(Box)`
  padding: 25px 85px;
`;

const Link = styled.a`
  color: ${props => props.theme.blueColor};
`;

const RegisterLink = styled(Link)`
  font-weight: 600;
`;

const LoginLink = styled(Link)`
  font-weight: 600;
`;
export default () => {
  const [action, setAction] = useState("logIn");
  //   console.log(action);
  return (
    <Wrapper>
      <LoginBox />
      {action === "logIn" ? (
        <StateChanger>
          계정이 없으신가요? <RegisterLink>가입하기</RegisterLink>
        </StateChanger>
      ) : (
        <StateChanger>
          계정이 있으신가요? <LoginLink>로그인</LoginLink>
        </StateChanger>
      )}
    </Wrapper>
  );
};
