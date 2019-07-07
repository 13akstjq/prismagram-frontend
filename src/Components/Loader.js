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
  animation: ${Animation} 1s linear infinite;
`;

export default () => (
  <Loader>
    <Spinner size={50} />
  </Loader>
);
