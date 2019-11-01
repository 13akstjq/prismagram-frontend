import React from "react";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import Loader from "../../Components/Loader";
import PostCard from "../../Components/PostCard";
import Button from "../../Components/Button";
import Theme from "../../Styles/Theme";
import { device } from "../../Styles/Device";
const Wrapper = styled.div`
  min-height: 90vh;
  ${Theme.router};
  width: 975px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 975px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
  height: 150px;

  @media ${device.mobileL} {
    /* height: 75px; */
  }
`;

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:first-child {
    margin: 0 10vw;
  }
  @media ${device.mobileL} {
    &:first-child {
      margin: 0 3vw;
    }
  }
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderItem = styled.li`
  font-size: 16px;
  margin-right: 20px;
  display: flex;
  & > div {
    margin-left: 0.3em;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const PostContainer = styled.div`
  padding: 1em;
  margin: auto;
  display: grid;
  grid-auto-rows: minmax(0, 300px);
  grid-template-columns: repeat(3, minmax(0px, 300px));
  grid-gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 940px) {
    grid-auto-rows: 32vw;
  }

  @media (max-width: 900px) {
    padding: 0;
    grid-gap: 3px;
  }
`;
const MetaItem = styled.li`
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s linear;
  margin-right: 50px;
  padding: 15px 10px;
  border-top: 2px solid rgb(0, 0, 0, 0);
`;
const MetaList = styled.ul`
  border-top: ${props => props.theme.boxBorder};
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  ${MetaItem}:hover {
    border-top: 2px solid rgb(0, 0, 0, 1.2);
    opacity: 1;
  }
  @media ${device.mobileL} {
    margin-bottom: 0;
  }
`;

const Text = styled.div`
  font-size: 1em;
`;

const FatText = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`;

export default ({ loading, data, logOut }) => {
  console.log(window.screen.width);
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (!loading && data && data.seeUser) {
    const {
      seeUser: { user }
    } = data;
    console.log(user);
    return (
      <Wrapper>
        <Header>
          <HeaderColumn>
            <Avatar size={"lg"} url={user.avatar} />
          </HeaderColumn>
          <HeaderColumn>
            <HeaderList>
              <HeaderItem>
                <FatText>{user.username}</FatText>
              </HeaderItem>
              {user.isSelf && (
                <HeaderItem>
                  <Button onClick={logOut} text="로그아웃" />
                </HeaderItem>
              )}
            </HeaderList>
            <HeaderList>
              <HeaderItem>
                게시물 <Text>{user.postCount}</Text>
              </HeaderItem>
              <HeaderItem>
                팔로워 <Text>{user.followerCount}</Text>
              </HeaderItem>
              <HeaderItem>
                팔로잉 <Text>{user.followingCount}</Text>
              </HeaderItem>
            </HeaderList>
            <HeaderList>
              <HeaderItem>
                <FatText text={user.fullName} />
              </HeaderItem>
            </HeaderList>
          </HeaderColumn>
        </Header>
        <MetaList>
          <MetaItem>게시물</MetaItem>
          <MetaItem>저장됨</MetaItem>
          <MetaItem>태그됨</MetaItem>
        </MetaList>
        <PostContainer>
          {user.posts.map(post => (
            <PostCard
              key={post.id}
              url={post.files[0].url}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
            />
          ))}
        </PostContainer>
      </Wrapper>
    );
  }
};
