import React, { useState, useRef } from 'react';
import Login from '../Login/Login';
import styled from 'styled-components';
import useOutSideClick from '../../utils/hooks/useOutSideClick';

const EmailBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const modalOpen = () => {
    setIsVisible(true);
  };

  const modalClose = () => {
    setIsVisible(false);
  };

  useOutSideClick(ref, modalClose);
  return (
    <Container>
      <ModalImg src="/images/Nav/padlock.png" onClick={modalOpen} />
      <ModalTitle>이메일 인증</ModalTitle>
      {isVisible && (
        <ModalSection ref={ref}>
          <CloseBtn onClick={modalClose} src="/images/Modal/close.png" />
          <Login />
        </ModalSection>
      )}
    </Container>
  );
};
export default EmailBtn;

const Container = styled.div`
  text-align: center;
`;
const ModalImg = styled.img`
  margin: 30px 0 5px;
  width: 30px;
  height: 27px;
`;

const ModalTitle = styled.div`
  text-align: center;
  color: orange;
`;

const CloseBtn = styled.img`
  position: absolute;
  right: 20px;
  width: 25px;
  height: 25px;
`;

const ModalSection = styled.section`
  position: fixed;
  border: 2px solid;
  border-image: linear-gradient(0deg, #ffd700 0%, #fff 50%, #d6b534 100%);
  border-image-slice: 2;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  width: 500px;
  height: 600px;
  left: 30%;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;
