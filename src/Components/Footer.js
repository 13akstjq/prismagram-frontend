import React from "react";
import styled from "styled-components";

//Wrap
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  /* justify-content: center; */
`;

//List
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
`;

//ListItem
const ListItem = styled.li`
  margin-right: 14px;
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
  margin-left: 130px;
  font-size: 12px;
  color: ${props => props.theme.greyColor};
`;

export default () => {
  return (
    <Wrap>
      <List>
        <ListItem>
          <Link>INSTAGRAM 정보</Link>
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
      <Copyright>© 2019 INSTAGRAM</Copyright>
    </Wrap>
  );
};
