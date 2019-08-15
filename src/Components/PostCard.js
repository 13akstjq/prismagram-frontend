import React from "react";
import styled from "styled-components";
import { HeartFull, FillComment } from "./Icons";

const Overlay = styled.div`
  min-width: 300px;
  min-height: 300px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.1s linear;
  align-items: center;
  svg {
    fill: white;
  }
`;

const Container = styled.div`
  cursor: pointer;
  min-width: 300px;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
  &:nth-child(3) {
    grid-column: 3/5;
    /* grid-column-start: 3; */
    /* grid-column-end: 5; */
    grid-row: 1/3;
  }
  &:nth-child(5) {
    grid-row: 3/5;
    grid-column: 1/3;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  color: white;
  &:first-child {
    margin-right: 15px;
  }
`;

const InfoText = styled.span`
  font-size: 20px;
  margin-left: 5px;
`;

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
          <FillComment />
          <InfoText>{commentCount}</InfoText>
        </Info>
      </Overlay>
    </Container>
  );
};
