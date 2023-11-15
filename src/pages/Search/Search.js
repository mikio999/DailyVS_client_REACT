import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import SearchCard from './SearchCard';

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const value = new URLSearchParams(location.search).get('keyword');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/search/?search=${value}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(result => {
        setSearchData(result);
        setLoading(false);
      });
  }, [value]);

  if (loading) return null;

  return (
    <Container>
      <SearchTitle>검색 목록</SearchTitle>
      {searchData.length === 0 ? (
        <NoSearchResults>{`"${value}"에 해당하는 검색어가 존재하지 않습니다.`}</NoSearchResults>
      ) : (
        <SearchGrid>
          {searchData.map(item => (
            <SearchContent key={item.id}>
              <SearchCard item={item} />
            </SearchContent>
          ))}
        </SearchGrid>
      )}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  min-height: 50vh;
`;

const SearchTitle = styled.h1`
  font-family: 'GongGothicLight';
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 24px;
  color: #17355a;
`;

const SearchGrid = styled.div`
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const SearchContent = styled.div``;

const NoSearchResults = styled.p`
  font-family: 'GongGothicLight';
  text-align: center;
  margin-top: 2rem;
  font-size: 18px;
  color: #17355a;
`;
