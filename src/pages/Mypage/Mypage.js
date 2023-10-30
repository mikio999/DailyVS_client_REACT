import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList/MypageVoteList';
import MypageLikeList from './MypageLikeList/MypageLikeList';

const Mypage = () => {
  const [userInformation, setUserInformation] = useState('');
  const [loading, setLoading] = useState(true);

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

    fetch(`http://127.0.0.1:8000/mypage`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  if (loading) return;
  return (
    <Container>
      <MypageInformation userInformation={userInformation} />
      <MypageVoteList />
      <MypageLikeList pollLike={userInformation.poll_like} />
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.blueBgColor};
`;
