import { gql } from "apollo-boost";

export const LON_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;
