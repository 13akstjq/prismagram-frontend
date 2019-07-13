import React from "react";
import styled, { keyframes } from "styled-components";
import { Spinner } from "../Components/Icons";

const Animation = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  } 
`;

const Loader = styled.div`
  /* width: 100%; */
  /* height: 100vh; */
  /* background-color: rgba(0, 0, 0, 0); */
  /* position: fixed; */
  /* top: 0px; */
  /* left: 0px; */
  animation: ${Animation} 1.5s linear infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default () => (
  <Wrapper>
    <Loader>
      <Spinner size={50} />
    </Loader>
  </Wrapper>
);
