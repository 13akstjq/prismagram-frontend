import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.whiteBox}
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  a {
    color: inherit;
  }
`;

export default ({ id, username, avatar, isFollowing, isSelf }) => (
  <Wrapper>
    <Avatar size={"md"} url={avatar} />
    <Link to={`/${username}`}>
      <FatText text={`${username}`} />
    </Link>
    {!isSelf &&
      (isFollowing ? (
        <FollowButton isFollowing={isFollowing} id={id} />
      ) : (
        <FollowButton isFollowing={isFollowing} id={id} />
      ))}
  </Wrapper>
);
