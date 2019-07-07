import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";

//proptypes를 정해야 하기 때문에 export default 안하고 const로 만듬
const PostContainer = ({
  location,
  caption,
  user,
  files,
  comments,
  isLiked,
  likeCount
}) => {
  const [isLikedS, setIsLikedS] = useState(isLiked);
  const [likeCountS, setLikeCountS] = useState(likeCount);
  const commentInput = useInput("", "text");
  return (
    <PostPresenter
      location={location}
      caption={caption}
      user={user}
      files={files}
      comments={comments}
      isLiked={isLikedS}
      likeCount={likeCountS}
      setisLiked={setIsLikedS}
      setLikeCountS={setLikeCountS}
      commentInput={commentInput}
    />
  );
};

//user ,
PostContainer.prototype = {
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }).isRequired,
  files: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  }).isRequired
};

export default PostContainer;
