import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MypageInformation = () => {
  const [userInformation, setUserInformation] = useState('');
  useEffect(() => {
    fetch('/data/user.json')
      .then(response => response.json())
      .then(result => {
        setUserInformation(result);
        console.log(result);
      });
  }, []);

  return (
    <Container>
      <InformationTitle>나의 정보</InformationTitle>
      <UserBox>
        <UserImg src="images/Nav/Logged.png" />
        <UserFeature>
          <FeatureTop>
            <UserName>
              {userInformation.nickname}
              <UserSpan>님</UserSpan>
            </UserName>
            <UserModify>개인정보 수정</UserModify>
          </FeatureTop>

          <UserCharacter>
            <UserMBTI>
              MBTI : <MBTISpan>{userInformation.mbti}</MBTISpan>
            </UserMBTI>
            <UserGender>
              성별 : <GenderSpan>{userInformation.gender}</GenderSpan>
            </UserGender>
          </UserCharacter>
        </UserFeature>
      </UserBox>
    </Container>
  );
};

export default MypageInformation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InformationTitle = styled.h1`
  font-family: 'GongGothicMedium';
  font-size: 24px;
  margin: 20px;
`;

const UserBox = styled.div`
  display: grid;
  grid-template-columns: 100px 380px;
  margin: 10px;
`;

const UserImg = styled.img`
  width: 90px;
`;

const UserFeature = styled.div`
  margin-left: 20px;
`;

const UserName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-family: 'GongGothicLight';
`;

const UserSpan = styled.span`
  color: gray;
  margin-left: 5px;
`;

const FeatureTop = styled.div`
  display: flex;
  width: 350px;
  padding-bottom: 15px;
  border-bottom: #bdbdbd 2px solid;
`;

const UserModify = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  font-size: 18px;
  width: 150px;
  height: 40px;
  color: white;
  background-color: #ff495a;
  &:hover {
    color: #ff495a;
    background-color: white;
    border: 1px solid #ff495a;
  }
`;

const UserCharacter = styled.div`
  display: flex;
  margin-top: 15px;
`;

const UserMBTI = styled.div`
  font-size: 20px;
  font-family: 'GongGothicLight';
`;

const MBTISpan = styled.span`
  color: #ff495a;
`;

const UserGender = styled.div`
  margin-left: 30px;
  font-size: 20px;
  font-family: 'GongGothicLight';
`;

const GenderSpan = styled.span`
  color: #ff495a;
`;
