import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PostCard from "../../Components/PostCard";

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

const ExplorerPresenter = ({ Feed, loading }) => {
  console.log(Feed);

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && Feed && (
        <Section>
          {Feed.map(post => (
            <PostCard
              key={post.id}
              url={post.files[0].url}
              likeCount={post.likeCount}
              commentCount={post.comments.length}
            />
          ))}
        </Section>
      )}
    </Wrapper>
  );
};

export default ExplorerPresenter;
