import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getSize = size => {
  let number = 0;

  if (size === "sm") {
    // small
    number = 30;
  } else if (size === "md") {
    //medium
    number = 50;
  } else if (size === "lg") {
    //large
    number = 150;
  }
  return `
    width: ${number}px;
    height ${number}px;
  `;
};

const AvatarContainer = styled.div`
    ${props => getSize(props.size)}
  background-image: url(${props => props.url});
  background-size : cover;
  border-radius: 50%;
  &:hover {
      cursor: pointer;
  }
`;

const Avatar = ({ size = "sm", url }) => {
  return <AvatarContainer size={size} url={url} />;
};

Avatar.prototype = {
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default Avatar;
