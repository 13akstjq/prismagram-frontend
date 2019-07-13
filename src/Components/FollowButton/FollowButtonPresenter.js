import React from "react";
import Button from "../Button";

export default ({ isFollowing, onClick }) => {
  return (
    <Button
      text={isFollowing === true ? "unFollow" : "Follow"}
      onClick={onClick}
    />
  );
};
