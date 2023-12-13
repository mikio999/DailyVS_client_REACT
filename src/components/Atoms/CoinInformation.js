import React, { useState } from 'react';
import styled from 'styled-components';

const CoinInformation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pointInfo, setPointInfo] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Container>
      <CoinInfo
        src={require('../../assets/Mypage/info.png')}
        onClick={openModal}
      />
      {isModalOpen ? (
        <ModalOverlay onClick={handleOverlayClick}>
          <CoinModal>
            <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
            <ModalTitle>VS 포인트란?</ModalTitle>
            <ModalContent>
              본인이 올린 투표 주제에 사람들이 <br />
              투표할 때마다 VS POINT 획득!
              <br />
              <CoinImg src={require('../../assets/Buttons/Coin.png')} />
              <br />
              투표를 올리고 투표 링크를 사람들에게 공유 후 <br />
              본인이 올린 주제에 투표가 쌓이게끔 하세요! <br />
              <br />
              본인이 올린 투표에 <br />
              비로그인 유저가 투표 시 : 1 VS Point 획득 <br />
              Daily VS 유저의 투표 시 : 10 VS Point 획득 <br />
              <br />
              다른 유저가 올린 투표에 <br />
              본인이 투표 시 = 3 VS 포인트 획득 <br />
              <br />
              VS 포인트를 올려 받을 수 있는 혜택은 <br />
              이벤트를 참조해주세요 :)
            </ModalContent>
          </CoinModal>
        </ModalOverlay>
      ) : null}
    </Container>
  );
};
export default CoinInformation;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Container = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
`;

const CoinInfo = styled.img`
  width: 25px;
  &:hover {
    opacity: 0.8;
  }
`;

const CoinModal = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 400px;
  height: 450px;
`;

const ModalTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: #17355a;
  font-family: 'GongGothicMedium';
  font-size: 1.5rem;
`;

const ModalContent = styled.div`
  display: flex;
  margin-top: 2rem;
  word-break: keep-all;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CoinImg = styled.img`
  width: 80px;
`;
