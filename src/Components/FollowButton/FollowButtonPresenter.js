import React from "react";
import Button from "../Button";

export default ({ isFollowing, onClick }) => {
  console.log(isFollowing);

  console.log(typeof onClick);
  return (
    <Button
      text={isFollowing === true ? "unFollow" : "Follow"}
      onClick={onClick}
    />
  );
};
