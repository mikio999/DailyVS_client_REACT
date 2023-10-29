import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { ChevronDown, CommentLikeBtn } from '../Atoms/Buttons';
import useClickEffect from '../../utils/hooks/useClickEffect';

function CommentBox({ data }) {
  const [reply, setReply] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(data.user_info);
    setReply(data.reply);
  }, []);

  const Time = () => {
    return (
      <span
        style={{
          fontSize: 14,
          color: theme.colors.grayColor,
          marginLeft: 'auto',
        }}
      >
        {data.time_difference}
      </span>
    );
  };
  const Likes = () => {
    return (
      <span style={{ fontSize: 14, color: theme.colors.grayColor }}>
        {data.likes_count} likes
      </span>
    );
  };

  const Reply = () => {
    const refReply = useRef(null);

    const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
      useClickEffect(refReply);

    return (
      <ReplyBtn
        ref={refReply}
        onMouseDown={handleBtnMD}
        onMouseUp={handleBtnMU}
        onMouseEnter={handleBtnME}
        onMouseLeave={handleBtnML}
      >
        답글 {reply.length}
      </ReplyBtn>
    );
  };

  return (
    <Container>
      <Info>
        <div className="name">{user.nickname}</div>
        <div className="mbti">{user.mbti}</div>
        <div className="gender">{user.gender}</div>
        <div className="result">{data.choice}</div>
        <Time />
      </Info>
      <Content>{data.content}</Content>

      <Bottom>
        <CommentLikeBtn />
        <Likes />
        <Reply />
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${theme.colors.lightGrayColor};
`;
const Info = styled.div`
  display: flex;
  align-items: flex-end;

  & .name {
    font-weight: 900;
    font-size: 20px;
    margin-right: 10px;
  }
  & .gender {
    margin: 0 5px;
  }
  & .result {
    color: ${theme.colors.turquoisSecondaryColor};
  }
`;
const Content = styled.div`
  display: flex;
  padding: 10px 0;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ReplyBtn = styled.div`
  margin-left: auto;
  padding: 8px 12px;
  border: 1px solid ${theme.colors.turquoisSecondaryColor};
  color: ${theme.colors.turquoisSecondaryColor};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s;
`;
export default CommentBox;
