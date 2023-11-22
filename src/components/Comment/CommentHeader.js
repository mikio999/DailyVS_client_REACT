import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderText from '../Atoms/HeaderText';

const CommentHeader = ({
  commentsCount,
  setCommentsCount,
  filter,
  setFilter,
}) => {
  const filterOption = ['최신순', '인기순'];

  const handleFilterChange = event => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter === '최신순' ? 'newest' : 'popular');
  };

  return (
    <Container>
      <CommentTitle style={{ width: 50 }}>
        <HeaderText content="댓글" />
        <CommentCount>
          <span>{commentsCount}</span>개
        </CommentCount>
      </CommentTitle>
      <CommentFunction>
        <CommentFilter
          onChange={handleFilterChange}
          value={filter === 'newest' ? '최신순' : '인기순'}
        >
          {filterOption.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </CommentFilter>
      </CommentFunction>
    </Container>
  );
};

export default CommentHeader;

const Container = styled.div`
  display: flex;
  width: min(100%, 1000px);
`;

const CommentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-right: auto;
  width: min(100%, 300px);
`;

const CommentFunction = styled.div`
  display: flex;
`;

const CommentCount = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  color: gray;
`;

const CommentFilter = styled.select`
  margin: 1rem;
  width: 120px;
  height: 45px;
  font-size: 16px;
  text-align: center;
  border: none;
  border-radius: 30px;
  color: white;
  background-color: #17355a;
  cursor: pointer;
`;
