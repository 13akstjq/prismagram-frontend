import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.boxRadius};
  background-color: ${props => props.theme.blueColor};
  color: white;
`;


const Button = ({ text }) => {
  return <Container>{text}</Container>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
