import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentBox from './CommentBox';
import CommentInput from './CommentInput';
import Paginator from '../Molecules/Paginator';
import { useSelector } from 'react-redux';
import CommentHeader from './CommentHeader';

function Comment({ voteId, voteChoice }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [comments, setComments] = useState('');
  const [commentsCount, setCommentsCount] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [newcomments, setNewcomments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('newest');
  const [replyCount, setReplyCount] = useState('');

  const addComment = newComment => {
    setNewcomments([...newcomments, newComment]);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (!accessToken) {
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    };

    fetch(`${process.env.REACT_APP_HOST}/accounts/user_info/`, {
      headers: config.headers,
    })
      .then(response => response.json())
      .then(result => {
        setUserInfo(result);
      });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const accessToken = localStorage.getItem('access');
      if (!accessToken) {
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      };

      fetch(
        `${process.env.REACT_APP_HOST}/${voteId}/comment/${filter}?page=${currentPage}`,
        {
          headers: config.headers,
        },
      )
        .then(response => response.json())
        .then(result => {
          setComments(result.comments);
          setCommentsCount(result.comments_count);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_HOST}/${voteId}/comment/${filter}?page=${currentPage}`,
      )
        .then(response => response.json())
        .then(result => {
          setComments(result.comments);
          setCommentsCount(result.comments_count);
        });
    }
  }, [currentPage, commentsCount, filter, replyCount]);

  return (
    <Container>
      <CommentHeader
        setCommentsCount={setCommentsCount}
        commentsCount={commentsCount}
        filter={filter}
        setFilter={setFilter}
      />
      <CommentInput
        voteId={voteId}
        voteChoice={voteChoice}
        onCommentSubmit={addComment}
        userInfo={userInfo}
        setCurrentPage={setCurrentPage}
        setCommentsCount={setCommentsCount}
        commentsCount={commentsCount}
      />
      <Wrapper>
        {comments &&
          comments.map(data => (
            <CommentBox
              key={data.id}
              data={data}
              voteId={voteId}
              voteChoice={voteChoice}
              userInfo={userInfo}
              setCurrentPage={setCurrentPage}
              ReplyCount={replyCount}
              setReplyCount={setReplyCount}
              commentsCount={commentsCount}
              setCommentsCount={setCommentsCount}
            />
          ))}
      </Wrapper>
      <Paginator
        count={commentsCount}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
}

const Container = styled.div`
  width: min(100%, 1100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default Comment;
