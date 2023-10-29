import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import HeaderText from '../Atoms/HeaderText';
import CommentBox from './CommentBox';

function Comment() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/data/comment.json')
      .then(response => response.json())
      .then(data => {
        console.log('데이터 받기 성공:', data);
        setDatas(data);
      })
      .catch(error => {
        console.error('데이터 받기 실패:', error);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <div style={{ width: 50 }}>
          <HeaderText content="댓글" />
        </div>
        {datas && datas.map(data => <CommentBox key={data.id} data={data} />)}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: min(100%, 1200px);
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.pinkBgColor};
  padding: 20px;
`;
const Wrapper = styled.div`
  width: 400px;
`;
export default Comment;
