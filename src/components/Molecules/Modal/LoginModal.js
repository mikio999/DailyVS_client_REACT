import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const LoginModal = ({ isOpen, onClose }) => {
  const handleOverlayClick = () => {
    // Implement logic to close the modal here
    onClose();
  };

  return isOpen ? (
    <ModalOverlay onClick={handleOverlayClick}>모달</ModalOverlay>
  ) : null; // You should return null when the modal is not open
};

export default LoginModal;

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
