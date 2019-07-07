import React from "react";
import styled from "styled-components";

const FatText = styled.span`
  font-weight: 600;
`;

export default ({ text }) => {
  return <FatText>{text}</FatText>;
};
