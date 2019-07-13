import React, { useState, useEffect } from "react";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";

//proptypes를 정해야 하기 때문에 export default 안하고 const로 만듬
const PostContainer = ({
  id,
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
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: commentInput.value }
  });
  const slide = () => {
    if (currentItem === files.length - 1) {
      setTimeout(() => {
        setCurrentItem(0);
      }, 2000);
    } else {
      setTimeout(() => {
        setCurrentItem(currentItem + 1);
      }, 2000);
    }
  };
  useEffect(() => {
    slide();
  });
  useEffect(() => {
    setLoading(false);
  }, [selfComments]);
  // 비동기를 사용해서 mutation이 응답온 다음에 바꾸면 느려짐
  //   const toggleLike = async () => {
  // await toggleLikeMutation();
  //   setIsLikedS(!isLikedS);
  // };

  const toggleLike = () => {
    if (isLikedS === true) {
      setIsLikedS(false);
      setLikeCountS(likeCountS - 1);
    } else {
      setIsLikedS(true);
      setLikeCountS(likeCountS + 1);
    }
    toggleLikeMutation();
  };
  const onKeyPress = async e => {
    const { which } = e;

    if (which === 13) {
      e.preventDefault();
      setLoading(true);
      const {
        data: { addComment }
      } = await addCommentMutation();
      setSelfComments([...selfComments, addComment]);
      commentInput.setValue("");
    }
  };

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
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
      loading={loading}
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
