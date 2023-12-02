import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DetailCard from './DetailCard';
import OptionCard from './OptionCard';
import {
  setOption,
  setChoice,
  setCategory,
  setCategoryList,
} from '../../../actions/actions';
import { useDispatch } from 'react-redux';
import RegisterBtn from '../../../components/Molecules/DetailBtns/RegisterBtn';
import AuthSubmitBtn from '../../../components/Molecules/AuthSubmitBtn';
import RevoteBtn from '../../../components/Molecules/RevoteBtn';
import ResultBtn from '../../../components/Molecules/ResultBtn';
import Writer from '../../../components/Molecules/Writer';
import VoteDeleteBtn from '../../../components/Atoms/VoteDeleteBtn';
import ReportVote from '../../../components/Atoms/ReportVote';

const Detail = () => {
  const dispatch = useDispatch();
  const [voteDetail, setVoteDetail] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');
  const params = useParams();
  const detailId = params.id;
  const handleDispatch = selectedOption => {
    dispatch(setOption(selectedOption + 1));
  };

  const handleChoiceDispatch = selectedChoice => {
    dispatch(setChoice(selectedChoice));
  };

  const handleCategoryDispatch = selectedCategory => {
    dispatch(setCategory(selectedCategory));
  };

  const handleCategoryListDispatch = selectedCategoryList => {
    dispatch(setCategoryList(selectedCategoryList));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    handleCategoryDispatch(voteDetail.category_list);
    handleCategoryListDispatch(voteDetail.category_list);
  }, [voteDetail]);

  useEffect(() => {
    handleDispatch(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    handleChoiceDispatch(selectedChoice);
  }, [selectedChoice]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const accessToken = localStorage.getItem('access');
      if (accessToken) {
        headers.append('Authorization', `Bearer ${accessToken}`);
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_HOST}/${detailId}`,
          {
            method: 'GET',
            headers: headers,
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setVoteDetail(result);

        if (result && result.previous_choice) {
          setSelectedOption(result.previous_choice - 1);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [detailId]);
  const isFormValid = () => {
    return selectedOption !== '';
  };

  return (
    <DetailContainer>
      {voteDetail ? (
        <>
          <DetailCard voteDetail={voteDetail} />
          {voteDetail.is_owner ? (
            <SubInfo>
              <VoteDeleteBtn voteId={voteDetail.poll?.id} />
              <Writer information={voteDetail?.poll} />
            </SubInfo>
          ) : (
            <WriterInfo>
              <ReportVote information={voteDetail?.poll} />
              <Writer information={voteDetail?.poll} />
            </WriterInfo>
          )}

          <OptionCard
            voteDetail={voteDetail}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            selectedChoice={selectedChoice}
            setSelectedChoice={setSelectedChoice}
            previusChoice={voteDetail.previous_choice}
          />
          {voteDetail.previous_choice ? (
            <ReButtons>
              <RevoteBtn previousChoiceId={voteDetail?.previous_choice_id} />
              <ResultBtn />
            </ReButtons>
          ) : voteDetail.category_list?.length === 0 ? (
            <AuthSubmitBtn isFormValid={isFormValid} />
          ) : (
            <RegisterBtn isFormValid={isFormValid} />
          )}
        </>
      ) : (
        <p>Vote not found</p>
      )}
    </DetailContainer>
  );
};

export default Detail;

const WriterInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  white-space: nowrap;
  width: 400px;
`;

const DetailContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #f8f8ff;
`;

const ReButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  margin-top: 2rem;
  width: 350px;
  align-items: center;
`;

const SubInfo = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 400px;
  margin: 0 auto;
  justify-content: center;
`;
