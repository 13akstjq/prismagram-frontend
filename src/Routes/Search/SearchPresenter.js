import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import PostCard from "../../Components/PostCard";
import HorizontalLine from "../../Components/HorizontalLine";
import Theme from "../../Styles/Theme";

const Wrapper = styled.div`
  ${Theme.router};
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-auto-rows: 196px;
  grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));
  grid-gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    padding: 0;
    grid-gap: 3px;
  }
`;

const PostSection = styled.div`
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

export default ({ term, data, loading }) => {
  // console.log(data.searchPost);
  if (term === undefined) {
    return (
      <Wrapper>
        <FatText text={"search for something"} />
      </Wrapper>
    );
  } else if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading) {
    return (
      <Wrapper>
        {data.searchUser.length === 0 ? (
          <FatText text={"no match User"} />
        ) : (
          // <FatText text={"User"}/>
          <Section>
            {/* <FatText text={"User"} /> */}
            {data.searchUser.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                username={user.username}
                avatar={user.avatar}
                isFollowing={user.isFollowing}
                isSelf={user.isSelf}
              />
            ))}
          </Section>
        )}
        <HorizontalLine />
        {data.searchPost.length === 0 ? (
          <FatText text={"no match Post"} />
        ) : (
          <PostSection>
            {data.searchPost.map(post => (
              <PostCard
                key={post.id}
                url={post.files[0].url}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))}
          </PostSection>
        )}
      </Wrapper>
    );
  }
};
