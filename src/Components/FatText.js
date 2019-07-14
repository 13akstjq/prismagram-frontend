import React from "react";
import styled from "styled-components";

const FatText = styled.span`
  font-weight: 600;
  font-size: ${props => props.size}px;
`;

export default ({ text, size }) => {
  return <FatText size={size}>{text}</FatText>;
};
