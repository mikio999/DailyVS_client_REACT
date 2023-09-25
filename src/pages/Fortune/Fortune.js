import React, { useState } from 'react';
import styled from 'styled-components';
import FortuneModal from './FortuneModal';

const Fortune = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FortunePage>
      <FortuneTitle>🥠 오늘의 포춘 쿠키 🥠</FortuneTitle>
      <FortuneCookieImg />
      <FortuneOpen onClick={openModal}>포춘 쿠키 열어보기</FortuneOpen>
      <FortuneModal isOpen={isModalOpen} onClose={closeModal} />
    </FortunePage>
  );
};

export default Fortune;

const FortunePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 600px;
`;

const FortuneTitle = styled.h1`
  margin-top: 30px;
  font-family: 'GongGothicLight';
  font-size: 24px;
`;

const FortuneCookieImg = styled.img`
  content: url('/images/Fortune/Cookie.png');
  width: 300px;
`;

const FortuneOpen = styled.button`
  width: 280px;
  height: 50px;
  font-size: 22px;
  background-color: ${props => props.theme.colors.darkbluePrimaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
    color: ${props => props.theme.colors.darkbluePrimaryColor};
    background-color: white;
    border: 1px solid #17355a;
    cursor: pointer;
  }
`;
