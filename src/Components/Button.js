import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.boxRadius};
  background-color: ${props => props.theme.blueColor};
  color: white;
  cursor: pointer;
  &:hover,
  :focus {
    outline: none;
  }
  padding: 6px 10px;
`;

const Button = ({ text }) => {
  return <Container>{text}</Container>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
