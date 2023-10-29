import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PollLikeBtn = () => {
  const [likeInfo, setLikeInfo] = useState('');
  const [isLiked, setIsLiked] = useState(likeInfo.user_likes_poll);
  const [userInformation, setUserInformation] = useState('');
  const params = useParams();
  const detailId = params.id;

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    fetch(`http://127.0.0.1:8000/${detailId}/like`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setLikeInfo(result);
        setIsLiked(result.user_likes_poll);
      });
  }, []);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'POST',
      headers: headers,
    };

    const requestBody = JSON.stringify({
      poll_id: detailId,
    });

    fetch(`http://127.0.0.1:8000/${detailId}/like`, {
      ...requestOptions,
      body: requestBody,
    })
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
        console.log(result);
      });
  };

  const heartImgSrc = isLiked
    ? '/images/Buttons/likeBtnRed.png'
    : '/images/Buttons/likeBtn.png';

  if (isAuthenticated)
    return (
      <Container onClick={handleLikeClick} data-liked={isLiked}>
        <HeartImg src={heartImgSrc} alt="좋아요" />
      </Container>
    );
};

export default PollLikeBtn;

const Container = styled.div`
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const HeartImg = styled.img`
  margin-top: 10px;
  margin-left: 15px;
  width: 30px;
`;
