import React from 'react';
import styled from 'styled-components';

const Paginator = ({ count, onPageChange, currentPage }) => {
  const pageSize = 5;
  const totalPages = Math.ceil(count / pageSize);

  const handlePageChange = pageNumber => {
    onPageChange(pageNumber);
  };

  return (
    <Container>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageNumber
          key={index}
          onClick={() => handlePageChange(index + 1)}
          active={currentPage === index + 1} // Check if it's the current page
        >
          {index + 1}
        </PageNumber>
      ))}
    </Container>
  );
};

export default Paginator;

const Container = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  width: 350px;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  width: 25px;
  height: 25px;
  border-radius: 30%;
  background-color: white;
  color: #17355a;
  border: 2px solid #17355a;
  ${props =>
    props.active &&
    `
    background-color: #17355a;
    color: white;
  `};
`;
