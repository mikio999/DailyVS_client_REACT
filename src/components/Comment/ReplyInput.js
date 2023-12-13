import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { MintButton } from '../Atoms/Buttons';
import { useSelector } from 'react-redux';
import Sending from '../Atoms/Sending';

function ReplyInput({
  data,
  voteId,
  voteChoice,
  onCommentSubmit,
  parentId,
  replyCount,
  setReplyCount,
  commentCategory,
}) {
  const [comment, setComment] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [isSending, setIsSending] = useState(false);

  console.log(voteChoice);
  function getAgeRange(age) {
    if (age === '10') {
      return '10대';
    } else if (age === '20_1') {
      return '20대 초';
    } else if (age === '20_2') {
      return '20대 후';
    } else if (age === '30_1') {
      return '30대 초';
    } else if (age === '30_2') {
      return '30대 후';
    } else if (age === '40') {
      return '40대 이상';
    } else {
      return '나이를 입력해주세요.';
    }
  }

  const handleChange = e => {
    const newComment = e.target.value;
    setComment(newComment);
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

  const handleSubmit = () => {
    onCommentSubmit(comment);
    setIsSending(true);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        content: comment,
        user_info: userInfo,
        poll: voteId,
        parent_comment: parentId,
      }),
    };

    fetch(`${process.env.REACT_APP_HOST}/${voteId}/comment`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setIsSending(false);
        setReplyCount(replyCount + 1);
      })
      .catch(error => {
        setIsSending(false);
        console.error('데이터 받기 실패:', error);
      });

    setComment('');
  };

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  function truncateString(str, maxLength) {
    if (str?.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  }

  return (
    <Container>
      {isAuthenticated ? (
        <>
          <Info>
            <div className="name">{userInfo.nickname}</div>
            {commentCategory?.map(category => (
              <div key={category.id} className={category.name}>
                {category.name === 'age'
                  ? getAgeRange(userInfo?.[category.name])
                  : userInfo?.[category.name]}
              </div>
            ))}
            <div className="result">
              {' '}
              {truncateString(voteChoice?.choice_text, 8)}
            </div>
          </Info>
          <CommentText
            value={comment}
            onChange={handleChange}
            placeholder="댓글을 입력하세요"
          />
          <div style={{ width: '30%', marginLeft: 'auto' }}>
            {!isSending ? (
              <MintButton
                content={'댓글 달기'}
                onClick={handleSubmit}
                disabled={comment.length === 0}
              />
            ) : (
              <DataSending>
                <Sending />
              </DataSending>
            )}
          </div>
        </>
      ) : (
        <div>로그인 후 이용해주세요</div>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid ${theme.colors.turquoisSecondaryColor};
  background-color: white;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;

  & .name {
    font-family: 'GongGothicLight';
    font-size: 18px;
    margin-right: 3px;
  }

  & .mbti {
    margin: 0 3px;
    font-size: 14px;
  }

  & .gender {
    margin: 0 3px;
    font-size: 14px;
  }

  & .age {
    margin: 0 3px;
    font-size: 14px;
  }

  & .result {
    font-size: 14px;
    color: ${theme.colors.turquoisSecondaryColor};
  }
`;
const CommentText = styled.textarea`
  resize: none;
  border: none;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  padding: 7px 12px;
  height: 30px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.placeholder};
    transition: color 0.3s;
  }

  &:focus::placeholder {
    color: ${theme.colors.turquoisSecondaryColor};
  }
`;

const DataSending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ReplyInput;
