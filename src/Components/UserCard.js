import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Wrapper = styled.div`
  width: 176px;
  height: 198px;
  ${props => props.theme.whiteBox}
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default ({ username, avatar, isFollowing, isSelf }) => (
  <Wrapper>
    <Avatar size={"md"} url={avatar} />
    <FatText text={`${username}`} />
    {!isSelf &&
      (isFollowing ? <Button text={"unFollow"} /> : <Button text={"Follow"} />)}
  </Wrapper>
);
