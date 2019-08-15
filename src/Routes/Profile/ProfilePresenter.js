import React from "react";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";
import PostCard from "../../Components/PostCard";
import Button from "../../Components/Button";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:first-child {
    margin: 0 100px;
  }
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderItem = styled.li`
  font-size: 16px;
  margin-right: 20px;
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
`;

export default ({ loading, data, logOut }) => {
  console.log(data);
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
  if (!loading && data && data.seeUser) {
    console.log(data.seeUser.posts);
    const { seeUser: user } = data;
    return (
      <Wrapper>
        <Header>
          <HeaderColumn>
            <Avatar size="lg" url={user.avatar} />
          </HeaderColumn>
          <HeaderColumn>
            <HeaderList>
              <HeaderItem>
                <FatText size="28" text={user.username} />
              </HeaderItem>
              {user.isSelf && (
                <HeaderItem>
                  <Button onClick={logOut} text="로그아웃" />
                </HeaderItem>
              )}
            </HeaderList>
            <HeaderList>
              <HeaderItem>
                게시물 <FatText text={Number(user.postCount)} />
              </HeaderItem>
              <HeaderItem>
                팔로워 <FatText text={Number(user.followerCount)} />
              </HeaderItem>
              <HeaderItem>
                팔로잉 <FatText text={Number(user.followingCount)} />
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
