import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MypageInformation = ({ userInformation }) => {
  const navigate = useNavigate();

  console.log(userInformation);
  function getAgeRange(age) {
    if (age === '10') {
      return '10대';
    } else if (age === '20_1') {
      return '20대 초반';
    } else if (age === '20_2') {
      return '20대 후반';
    } else if (age === '30_1') {
      return '30대 초반';
    } else if (age === '30_2') {
      return '30대 후반';
    } else {
      return '40대';
    }
  }

  const ageRange = getAgeRange(userInformation.user?.age);

  const moveToModify = () => {
    navigate('/my-page/fix');
  };

  return (
    <Container>
      <UserBox>
        <UserIcon>
          <UserImg src={require('../../assets/Nav/Logged.png')} />
        </UserIcon>
        <UserFeature>
          <FeatureTop>
            <UserName>
              {userInformation.user?.nickname}
              <UserSpan>님</UserSpan>
            </UserName>
            <UserModify onClick={moveToModify}>개인정보 수정</UserModify>
          </FeatureTop>
          <UserCharacter>
            <UserMBTI>
              MBTI : <MBTISpan>{userInformation.user?.mbti}</MBTISpan>
            </UserMBTI>
            <UserGender>
              성별 : <GenderSpan>{userInformation.user?.gender}</GenderSpan>
            </UserGender>
          </UserCharacter>
          <UserAge>
            나이 : <AgeSpan>{ageRange}</AgeSpan>
          </UserAge>
          <UserPoint>
            <CoinImg src={require('../../assets/Buttons/Coin.png')} />
            <CoinName>유저 포인트 : </CoinName>
            <CoinNumber>{userInformation.user?.point}</CoinNumber>
            <CoinName>pt</CoinName>
          </UserPoint>
        </UserFeature>
      </UserBox>
    </Container>
  );
};

export default MypageInformation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  min-width: 350px;
  width: 100%;
`;

const UserBox = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

const UserImg = styled.img`
  display: flex;
  width: 70px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const UserFeature = styled.div`
  margin-left: 5px;
  width: 90%;
`;

const UserName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'GongGothicLight';
  color: #457c9e;
  white-space: nowrap;
`;

const UserSpan = styled.span`
  color: gray;
  margin-left: 5px;
`;

const UserAge = styled.h2`
  margin-top: 1rem;
  font-size: 17px;
  font-family: 'GongGothicLight';
`;

const AgeSpan = styled.span`
  color: #ff495a;
  margin-left: 5px;
`;

const FeatureTop = styled.div`
  display: flex;
  padding-bottom: 15px;
  border-bottom: #bdbdbd 2px solid;
`;

const UserModify = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 15px;
  width: 180px;
  height: 40px;
  color: white;
  background-color: #ff495a;
  &:hover {
    cursor: pointer;
    color: #ff495a;
    background-color: white;
    border: 1px solid #ff495a;
  }
`;

const UserCharacter = styled.div`
  display: flex;
  margin-top: 15px;
  white-space: nowrap;
`;

const UserMBTI = styled.div`
  font-size: 17px;
  font-family: 'GongGothicLight';
`;

const MBTISpan = styled.span`
  color: #ff495a;
`;

const UserGender = styled.div`
  margin-left: 10px;
  font-size: 17px;
  font-family: 'GongGothicLight';
`;

const UserIcon = styled.div`
  margin: auto;
`;

const GenderSpan = styled.span`
  color: #ff495a;
`;

const UserPoint = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const CoinImg = styled.img`
  width: 35px;
`;

const CoinName = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-family: 'GongGothicLight';
  margin-left: 10px;
`;

const CoinNumber = styled.span`
  font-family: 'GongGothicLight';
  color: #ff495a;
  margin-left: 10px;
`;
