import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import HeaderText from '../Atoms/HeaderText';
import CommentBox from './CommentBox';
import CommentCard from './CommentCard';
import CommentInput from './CommentInput';

function Comment({ voteId, voteChoice }) {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState(voteId);
  const [newcomments, setNewcomments] = useState([]);
  const addComment = newComment => {
    setNewcomments([...newcomments, newComment]);
  };

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
  useEffect(() => {
    setId(voteId);
  }, [voteId]);

  console.log(newcomments);
  return (
    <Container>
      <div style={{ width: 50, marginRight: 'auto', paddingLeft: 20 }}>
        <HeaderText content="댓글" />
      </div>
      <CommentInput
        voteId={voteId}
        voteChoice={voteChoice}
        onCommentSubmit={addComment}
      />
      <Wrapper>
        {newcomments &&
          newcomments
            ?.slice()
            .reverse()
            .map((comment, index) => (
              <CommentCard key={index} data={comment} voteChoice={voteChoice} />
            ))}
        {datas && datas.map(data => <CommentBox key={data.id} data={data} />)}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: min(100%, 1200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.pinkBgColor};
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 400px;
`;
export default Comment;
