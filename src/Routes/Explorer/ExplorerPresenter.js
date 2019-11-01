import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PostCard from "../../Components/PostCard";
import Theme from "../../Styles/Theme";

const Wrapper = styled.div`
  min-height: 90vh;
  ${Theme.router};
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.div`
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
