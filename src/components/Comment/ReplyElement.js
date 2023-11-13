import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import useClickEffect from '../../utils/hooks/useClickEffect';
import ReportComment from '../Atoms/ReportComment';
import DeleteReply from '../Atoms/DeleteReply';

function ReplyElement({
  user,
  data,
  reply,
  setShowReply,
  replyCount,
  setReplyCount,
  voteId,
}) {
  function truncateString(str, maxLength) {
    if (str?.length > maxLength) {
      return str?.slice(0, maxLength) + '...';
    }
    return str;
  }

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

  const isUser = data?.is_owner;

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
        onClick={() => {
          // if (reply.length > 0) {
          //   setShowReply(curr => !curr);
          // }
          setShowReply(curr => !curr);
        }}
      >
        답글 {replyCount}
      </ReplyBtn>
    );
  };
  return (
    <Container re={reply ? false : true}>
      {!reply && (
        <img
          src={require('../../assets/Buttons/reply.png')}
          width={25}
          alt="reply"
        />
      )}
      <Info>
        <div className="name">{user.nickname}</div>
        <div className="mbti">{user.mbti}</div>
        <div className="gender">{user.gender}</div>
        <div className="result"> {truncateString(data?.choice_text, 8)}</div>
        <Time />
      </Info>
      <CommentMain>
        <Content>{data.content}</Content>
        {isUser ? (
          <BtnBox>
            <DeleteReply
              commentId={data?.id}
              voteId={voteId}
              replyCount={replyCount}
              setReplyCount={setReplyCount}
            />
          </BtnBox>
        ) : (
          <BtnBox>
            <ReportComment />
          </BtnBox>
        )}
      </CommentMain>
      <Bottom>{!!reply && <Reply />}</Bottom>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  border-radius: 10px;
  padding: 15px 0;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${theme.colors.lightGrayColor};
  padding-left: ${props => (props.re ? '30px' : 0)};
  position: relative;
  & > img {
    position: absolute;
    left: 0;
    top: 10px;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;

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
  width: min(100%, 1000px);
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  min-width: 75px;
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

export default ReplyElement;

const CommentMain = styled.div`
  display: flex;
`;

const BtnBox = styled.div`
  display: flex;
  margin: auto;
`;
