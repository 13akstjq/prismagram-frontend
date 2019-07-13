import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import PostCard from "../../Components/PostCard";
import HorizontalLine from "../../Components/HorizontalLine";

const Wrapper = styled.div`
  min-height: 50vh;
  /* text-align: center; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
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
          <Section>
            {data.searchPost.map(post => (
              <PostCard
                key={post.id}
                url={post.files[0].url}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))}
          </Section>
        )}
      </Wrapper>
    );
  }
};
