import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import whiteLogo from "../../assets/image/manstagram_white_logo.png";
import mainImage from "../../assets/image/manstagram_mobile.png";
import { device } from "../../Styles/Device";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
  }
`;

const MainImage = styled.div`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 700px;
  width: 360px;
  margin-right: 2em;
  @media ${device.tablet} {
    display: none;
  }
`;

const Logo = styled.div`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: 180px 60px;
  width: 180px;
  height: 60px;
  margin-bottom: 2em;
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
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled(Box)`
  padding: 40px 30px;
  padding-top: 20px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
  form {
    width: 100%;
  }
`;

const SignUpText = styled.div`
  text-align: center;
  font-size: 1.3em;
  line-height: 1.4;
  margin-bottom: 1em;
`;

const StateChanger = styled(Box)`
  text-align: center;
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

const AppContainer = styled.div`
  padding: 1em;
`;

const AppText = styled.div``;

const PlayStoreIcon = styled.div`
  margin-top: 1em;
  background-image: url("https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png");
  background-position: center;
  background-size: 132px 38px;
  background-repeat: no-repeat;
  width: 132px;
  height: 38px;
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
      <MainImage url={mainImage}></MainImage>
      <FormContainer>
        <Form>
          <Logo url={whiteLogo}></Logo>
          {action === "logIn" && (
            <form onSubmit={onSubmit}>
              <Input placeholder={"휴대폰 번호 또는 이메일 주소"} {...email} />
              <Button text={"로그인"} />
            </form>
          )}
          {action === "signUp" && (
            <>
              <SignUpText>
                친구들의 사진을 보고싶다면
                <br /> 회원가입하세요!
              </SignUpText>
              <form onSubmit={onSubmit}>
                <Input
                  placeholder={"휴대폰 번호 또는 이메일 주소"}
                  {...email}
                />
                <Input placeholder={"성"} {...lastName} />
                <Input placeholder={"이름"} {...firstName} />
                <Input placeholder={"사용자 이름"} {...username} />
                <Button text={"가입"} />
                <Help>
                  가입하면 Manstagram의{" "}
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
            </>
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
        <AppContainer>
          <AppText>앱을 다운로드 받아보세요.</AppText>
          <a
            target="blank"
            href="https://play.google.com/store/apps/details?id=com.manstagram2.mansub&hl=ko"
          >
            <PlayStoreIcon></PlayStoreIcon>
          </a>
        </AppContainer>
      </FormContainer>
    </Wrapper>
  );
};
