import React, { useState } from 'react';
import styled from 'styled-components';
import ReportModal from '../Molecules/ReportModal';

const ReportVote = ({ information }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(information);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container onClick={openModal}>
        <ReportImg src={require('../../assets/Buttons/report2.png')} />
        신고하기
      </Container>
      <ReportModal
        isOpen={isModalOpen}
        onClose={closeModal}
        information={information}
      />
    </>
  );
};
export default ReportVote;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  width: 26px;
  color: gray;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ReportImg = styled.img`
  width: 13px;
  margin-right: 3px;
`;
