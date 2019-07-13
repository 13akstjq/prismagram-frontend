import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  border-bottom: ${props => props.theme.boxBorder};
  margin-bottom: 20px;
`;
export default () => <Line />;
