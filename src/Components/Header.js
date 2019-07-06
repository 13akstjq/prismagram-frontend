import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Logo, Compass, User, Heart } from "./Icons";
import Input from "./Input";
import useInput from "../Hooks/useInput";
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

export default withRouter(({ history }) => {
  const search = useInput("", "text");

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
            <Heart />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/profile">
            <User />
          </Link>
        </MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
});
