import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      likeCount
      commentCount
      files {
        id
        url
      }
    }
    searchUser(term: $term) {
      id
      username
      avatar
      isSelf
      isFollowing
    }
  }
`;
