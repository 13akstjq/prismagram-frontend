import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.boxRadius};
  padding: 12px 10px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.blackColor};
`;

const Input = ({ placeholder, required = true }) => (
  <Container placeholder={placeholder} required={required} />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
