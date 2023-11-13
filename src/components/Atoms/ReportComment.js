import React, { useState } from 'react';
import styled from 'styled-components';
import ReportCommentModal from '../Molecules/ReportCommentModal';

const ReportComment = ({ commentId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = e => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container onMouseDown={openModal}>
      <ReportImg src={require('../../assets/Buttons/report2.png')} />
      <ReportWord>신고</ReportWord>
      <ReportCommentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        commentId={commentId}
      />
    </Container>
  );
};
export default ReportComment;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  width: 50px;
`;

const ReportImg = styled.img`
  width: 13px;
  margin-right: 5px;
  padding-bottom: 3px;
`;

const ReportWord = styled.div`
  color: gray;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
