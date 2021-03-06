import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Textarea from "react-textarea-autosize";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, CommentBubble, UploadCloud } from "../Icons";
import Loader from "../Loader";
import { device } from "../../Styles/Device";

const Wrapper = styled.div`
  width: 600px;
  margin-bottom: 6em;

  @media ${device.tablet} {
    margin-bottom: 3em;
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
  @media ${device.mobileL} {
    margin-bottom: 0;
  }
`;
const Post = styled.div`
  ${props => props.theme.whiteBox};

  a {
    color: inherit;
  }

  @media ${device.mobileL} {
    border: none;
  }
`;

const Files = styled.div`
  position: relative;
  height: 600px;
`;

const File = styled.div`
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 600px;
  background-image: url(${props => props.url});
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Header = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
`;

const UserColumn = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const Location = styled.div`
  margin-top: 6px;
  display: block;
`;

const Meta = styled.div`
  display: flex;
  padding: 10px 5px;
`;

const Caption = styled.span`
  padding: 5px 0;
  padding-left: 1em;

  font-weight: 600;
`;

const Button = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
const CommentList = styled.div``;

const CommentItems = styled.div`
  position: relative;
  padding-top: 7px;
  padding-left: 1em;
  width: 100%;
  display: flex;
  &:last-child {
    padding-bottom: 7px;
    border-bottom: ${props => props.theme.boxBorder};
  }
`;
const CommentId = styled.div`
  cursor: pointer;
`;
const CommentText = styled.span`
  margin-left: 9px;
`;

const CommentHeart = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const AutoSizeTextArea = styled(Textarea)`
  margin: 0px;
  padding: 10px 16px;
  height: 56px;
  width: 100%;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const LikeCount = styled.div`
  padding: 0.3em 1em;
  font-size: 14px;
  margin-bottom: 0.5em;
`;

export default ({
  location,
  caption,
  user: { username, avatar },
  files,
  comments,
  isLiked,
  likeCount,
  setisLiked,
  setLikeCountS,
  commentInput,
  currentItem,
  toggleLike,
  onKeyPress,
  selfComments,
  loading
}) => {
  return (
    <Wrapper>
      {loading && <Loader />}
      <Post>
        <Header>
          <Avatar size={"sm"} url={avatar} />
          <UserColumn>
            <Link to={`/${username}`}>
              <FatText text={username} />
            </Link>
            <Location>{location}</Location>
          </UserColumn>
        </Header>
        <Files>
          {files.map((file, index) => (
            <File
              key={file.id}
              url={file.url}
              showing={currentItem === index}
            />
          ))}
        </Files>
        <Meta>
          <Button onClick={toggleLike}>
            {isLiked ? <HeartFull /> : <HeartEmpty />}
          </Button>
          <Button>
            <CommentBubble />
          </Button>
          <Button>
            <UploadCloud />
          </Button>
        </Meta>
        <LikeCount>
          <FatText text={`좋아요 ${likeCount}개 `} />
        </LikeCount>
        <Caption>{caption}</Caption>
        <CommentList>
          {comments.map(comment => (
            <CommentItems key={comment.id}>
              <CommentId>
                <FatText text={comment.user.username} />
              </CommentId>
              <CommentText>{comment.text}</CommentText>
              <CommentHeart>
                <HeartEmpty size={11} />
              </CommentHeart>
            </CommentItems>
          ))}
          {selfComments.map(comment => (
            <CommentItems key={comment.id}>
              <CommentId>
                <FatText text={comment.user.username} />
              </CommentId>
              <CommentText>{comment.text}</CommentText>
              <CommentHeart>
                <HeartEmpty size={11} />
              </CommentHeart>
            </CommentItems>
          ))}
        </CommentList>
        <AutoSizeTextArea
          onKeyPress={onKeyPress}
          placeholder={"댓글 달기..."}
          value={commentInput.value}
          onChange={commentInput.onChange}
        />
      </Post>
    </Wrapper>
  );
};
