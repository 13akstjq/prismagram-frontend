import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SEE_FEED = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        username
        avatar
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
    }
  }
`;

export default () => {
  const { data, loading } = useQuery(SEE_FEED);
  console.log(data);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            location={post.location}
            caption={post.caption}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            user={post.user}
            comments={post.comments}
            files={post.files}
          />
        ))}
    </Wrapper>
  );
};
