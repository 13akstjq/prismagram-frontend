import React from "react";
import styled from "styled-components";
import { HeartFull, CommentBubble } from "./Icons";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s linear;
  align-items: center;
  &:svg {
    fill: white;
  }
`;

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${props => props.url});
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Info = styled.div``;

const InfoText = styled.span``;

export default ({ url, likeCount, commentCount }) => {
  console.log(url);
  return (
    <Container url={url}>
      <Overlay>
        <Info>
          <HeartFull />
          <InfoText>{likeCount}</InfoText>
        </Info>
        <Info>
          <CommentBubble />
          <InfoText>{commentCount}</InfoText>
        </Info>
      </Overlay>
    </Container>
  );
};
