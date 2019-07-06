import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
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
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
  return null;
};
