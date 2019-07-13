import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Link, withRouter } from "react-router-dom";
import { Logo, Compass, User, HeartEmpty } from "./Icons";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";
const HeaderWrapper = styled.div`
  ${props => props.theme.whiteBox};
  border: ${props => props.theme.boxBorder};
  height: 77px;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  input:focus {
    outline: none;
  }
`;

const Home = styled.div``;

const Search = styled.div`
  input {
    text-align: center;
  }
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 21px;
`;

const ME = gql`
  {
    me {
      user {
        username
      }
    }
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("", "text");
  const {
    data: { me }
  } = useQuery(ME);
  const onSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <HeaderWrapper>
      <Home>
        <Link to="/">
          <Logo />
        </Link>
      </Home>
      <Search>
        <form onSubmit={onSubmit}>
          <Input placeholder="Search" {...search} />
        </form>
      </Search>
      <MenuList>
        <MenuItem>
          <Link to="/explore">
            <Compass />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/notifications">
            <HeartEmpty />
          </Link>
        </MenuItem>
        <MenuItem>
          {!me ? (
            <Link to="/profile">
              <User />
            </Link>
          ) : (
            <Link to={me.user.username}>
              <User />
            </Link>
          )}
        </MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
});
