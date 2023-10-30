import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList/MypageVoteList';
import MypageLikeList from './MypageLikeList/MypageLikeList';

const Mypage = () => {
  const [userInformation, setUserInformation] = useState('');

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

    fetch(`http://127.0.0.1:8000/accounts/mypage_info/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
      });
  }, []);

  return (
    <Container>
      <MypageInformation userInformation={userInformation} />
      <MypageVoteList />
      <MypageLikeList />
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
