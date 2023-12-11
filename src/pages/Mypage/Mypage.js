import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MypageInformation from './MypageInformation';
import MypageVoteList from './MypageVoteList/MypageVoteList';
import MypageLikeList from './MypageLikeList/MypageLikeList';
import MypageCreateList from './MypageCreateList/MypageCreateList';

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

    fetch(`${process.env.REACT_APP_HOST}/mypage`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
        setLoading(false);
      });
  }, []);

  if (loading) return;
  return (
    <Container>
      <InformationTitle>나의 정보</InformationTitle>

      <MypageInformation userInformation={userInformation} />
      <MypageVoteList />
      <MypageCreateList />
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

const InformationTitle = styled.h1`
  font-family: 'GongGothicMedium';
  font-size: 28px;
  margin: 20px auto;
`;
