import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { CommentLikeBtn } from '../Atoms/Buttons';

function CommentBox({ nested = false }) {
  return (
    <Container>
      <Info>
        <div className="name">권유리</div>
        <div className="mbti">ISTP</div>
        <div className="gender">여성</div>
        <div className="result">위로한다</div>
      </Info>
      <Content>너네 너무 매정해.. 힘들면 울수도 있지..</Content>
      <Bottom>
        <CommentLikeBtn />
        <CommentLikeBtn dislike />
      </Bottom>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  border: 2px solid ${theme.colors.darkbluePrimaryColor};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Info = styled.div`
  display: flex;
  align-items: flex-end;

  & .name {
    font-weight: 900;
    font-size: 20px;
    margin-right: 10px;
  }
  & .mbti {
    margin-right: 5px;
  }
  & .result {
    margin-left: auto;
    font-size: 20px;
    color: ${theme.colors.grayColor};
  }
`;
const Content = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.colors.lightGrayColor};
  padding: 10px 0;
`;
const Bottom = styled.div`
  display: flex;
`;
export default CommentBox;
