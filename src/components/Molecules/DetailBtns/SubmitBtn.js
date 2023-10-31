import React, { useState } from 'react';
import styled from 'styled-components';
import LoginModal from '../LoginModal';

const SubmitBtn = ({ isFormValid }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <RegisterButton
        onClick={() => {
          openModal();
        }}
        disabled={!isFormValid()}
      >
        투표하기
      </RegisterButton>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default SubmitBtn;

const RegisterButton = styled.button`
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 300px;
  height: 50px;
  font-size: 24px;
  background-color: ${props => (props.disabled ? '#BDBDBD' : '#17355a')};
  color: white;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
