import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";

export default ({ isFollowing, id }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const followMutation = useMutation(FOLLOW, {
    variables: {
      id
    }
  });
  const unFollowMutation = useMutation(UNFOLLOW, {
    variables: {
      id
    }
  });
  const onClick = () => {
    if (isFollowingS === true) {
      setIsFollowing(false);
      unFollowMutation();
    } else {
      setIsFollowing(true);
      followMutation();
    }
  };
  return <FollowButtonPresenter isFollowing={isFollowingS} onClick={onClick} />;
};
