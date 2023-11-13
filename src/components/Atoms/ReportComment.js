import React, { useState } from 'react';
import styled from 'styled-components';
import ReportCommentModal from '../Molecules/ReportCommentModal';

const ReportComment = ({ commentId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = e => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container onMouseDown={openModal}>
      <ReportImg src={require('../../assets/Buttons/report2.png')} />
      신고
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
  color: gray;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ReportImg = styled.img`
  width: 13px;
  margin-right: 5px;
  padding-bottom: 3px;
`;
