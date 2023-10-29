import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import HeaderText from '../Atoms/HeaderText';
import CommentBox from './CommentBox';

function Comment() {
  return (
    <Container>
      <Wrapper>
        <div style={{ width: 50 }}>
          <HeaderText content="댓글" />
        </div>
        <CommentBox />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: min(100%, 1200px);
  display: flex;
  justify-content: center;
  height: 500px;
  background-color: ${theme.colors.pinkBgColor};
  padding: 20px;
`;
const Wrapper = styled.div`
  width: 400px;
`;
export default Comment;
