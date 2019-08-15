import { gql } from "apollo-boost";

export const SEE_FEED = gql`
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
