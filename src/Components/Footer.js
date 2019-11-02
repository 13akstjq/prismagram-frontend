import React from "react";
import styled from "styled-components";
import { device } from "../Styles/Device";

//Wrap
const Wrap = styled.div`
  height: 100px;
  /* position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    max-width: 360px;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
  }
`;

//List
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

//ListItem
const ListItem = styled.li`
  margin-right: 0.8em;
  @media ${device.tablet} {
    margin-bottom: 1em;
  }
`;

//Link
const Link = styled.a`
  font-size: 12px;
  color: ${props => props.theme.darkGreyColor};
  font-weight: bold;
  cursor: pointer;
`;

//Copyright
const Copyright = styled.div`
  font-size: 12px;
  color: ${props => props.theme.greyColor};
`;

export default () => {
  return (
    <Wrap>
      <List>
        <ListItem>
          <Link>MANSTAGRAM 정보</Link>
        </ListItem>
        <ListItem>
          <Link>지원</Link>
        </ListItem>
        <ListItem>
          <Link>홍보 센터</Link>
        </ListItem>
        <ListItem>
          <Link>API</Link>
        </ListItem>
        <ListItem>
          <Link>채용 정보</Link>
        </ListItem>
        <ListItem>
          <Link href="/private">개인정보처리방침</Link>
        </ListItem>
        <ListItem>
          <Link>약관</Link>
        </ListItem>
        <ListItem>
          <Link>디렉터리</Link>
        </ListItem>
        <ListItem>
          <Link>프로필</Link>
        </ListItem>
        <ListItem>
          <Link>해시태그</Link>
        </ListItem>
        <ListItem>
          <Link>언어</Link>
        </ListItem>
      </List>
      <Copyright>© 2019 MANSTAGRAM</Copyright>
    </Wrap>
  );
};
