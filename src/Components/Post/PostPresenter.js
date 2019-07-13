import React from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, CommentBubble, UploadCloud } from "../Icons";
import Loader from "../Loader";

const Wrapper = styled.div``;

const Post = styled.div`
  ${props => props.theme.whiteBox};
  margin-top: 100px;
  width: 600px;
`;

const Files = styled.div`
  position: relative;
  height: 600px;
`;

const File = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  background-image: url(${props => props.url});
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Header = styled.div`
  height: 60px;
  width: 600px;
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

const Button = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
const CommentList = styled.div``;

const CommentItems = styled.div`
  position: relative;
  padding-top: 7px;
  padding-left: 16px;
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
  padding: 7px 16px;
  font-size: 14px;
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
            <FatText text={username} />
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
          <FatText text={`${likeCount} Likes`} />
        </LikeCount>
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
