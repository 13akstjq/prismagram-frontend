import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

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
  width: 100%;
  max-width: 356px;
  form {
    input {
      margin-bottom: 5px;
      width: 100%;
    }
    button {
      width: 100%;
      padding: 8px 0;
      font-weight: 900;
    }
    a {
      color: ${props => props.theme.blackColor};
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StateChanger = styled(Box)`
  padding: 20px 80px;
`;

const Link = styled.a`
  color: ${props => props.theme.blueColor};
`;

const StateLink = styled(Link)`
  font-weight: 600;
  cursor: pointer;
`;

const Help = styled.p`
  margin-top: 17px;
  line-height: 1.3;
  text-align: center;
`;
export default ({
  action,
  setAction,
  username,
  email,
  firstName,
  lastName,
  secret,
  onSubmit
}) => {
  //   console.log(action);
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"휴대폰 번호 또는 이메일 주소"} {...email} />
            <Button text={"로그인"} />
          </form>
        )}
        {action === "signUp" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"휴대폰 번호 또는 이메일 주소"} {...email} />
            <Input placeholder={"성"} {...lastName} />
            <Input placeholder={"이름"} {...firstName} />
            <Input placeholder={"사용자 이름"} {...username} />
            <Button text={"가입"} />
            <Help>
              가입하면 Instagram의{" "}
              <Link
                target="_blank"
                href="https://help.instagram.com/581066165581870"
              >
                약관
              </Link>
              ,{" "}
              <Link
                target="_blank"
                href="https://help.instagram.com/519522125107875"
              >
                데이터 정책
              </Link>{" "}
              및{" "}
              <Link
                target="_blank"
                href="https://help.instagram.com/1896641480634370?ref=ig"
              >
                쿠키 정책
              </Link>
              에 동의하게 됩니다.
            </Help>
          </form>
        )}
        {action === "confirm" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"paste your secret"} required {...secret} />
            <Button text={"확인"} />
          </form>
        )}
      </Form>

      {action === "logIn" && (
        <StateChanger>
          계정이 없으신가요?{" "}
          <StateLink onClick={() => setAction("signUp")}>가입하기</StateLink>
        </StateChanger>
      )}
      {action === "signUp" && (
        <StateChanger>
          계정이 있으신가요?{" "}
          <StateLink onClick={() => setAction("logIn")}>로그인</StateLink>
        </StateChanger>
      )}
    </Wrapper>
  );
};
