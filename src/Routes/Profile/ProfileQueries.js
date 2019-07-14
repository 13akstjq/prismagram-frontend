import { gql } from "apollo-boost";

export const SEE_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      posts {
        id
        likeCount
        commentCount
        files {
          id
          url
        }
      }
      postCount
      followingCount
      followerCount
      isFollowing
      isSelf
    }
  }
`;

export const LOCAL_LOG_Out = gql`
  mutation {
    logUserOut @client
  }
`;
