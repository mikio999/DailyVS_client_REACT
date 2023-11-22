import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import ResultTop from './ResultTop/ResultTop';
import TotalGraph from './ResultTop/TotalGraph';
import ResultGraph from './ResultGraph/ResultGraph';
import ResultBtn from './ResultBtn/ResultBtn';
import { useParams, useNavigate } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import { useSelector } from 'react-redux';
import ResultInfo from './ResultInfo/ResultInfo';
import LatestPolls from './LatestPolls/LatestPolls';

const Result = () => {
  const [voteResult, setVoteResult] = useState([]);
  const [showWatermark, setShowWatermark] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollColor, setScrollColor] = useState('#fff9f9');
  const resultRef = useRef(null);
  const params = useParams();
  const detailId = params.id;
  const navigate = useNavigate();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / window.innerHeight) * 100;

      if (scrollPercentage <= 40) {
        setScrollColor('#fff9f9');
      } else if (scrollPercentage <= 75) {
        setScrollColor('#f8f8ff');
      } else {
        setScrollColor('#f9fcff');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const accessToken = localStorage.getItem('access');
      if (!accessToken) {
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      };

      fetch(`${process.env.REACT_APP_HOST}/${detailId}/poll_result_page`, {
        headers: config.headers,
      })
        .then(response => response.json())
        .then(result => {
          if (result.detail === '찾을 수 없습니다.') {
            navigate('/error');
          } else {
            setVoteResult(result);
          }
        });
    } else {
      fetch(`${process.env.REACT_APP_HOST}/${detailId}/poll_result_page`)
        .then(response => response.json())
        .then(result => {
          if (result.detail === '찾을 수 없습니다.') {
            navigate('/error');
          } else {
            setVoteResult(result);
          }
        });
    }
  }, []);

  const handleCapture = () => {
    setShowWatermark(true);
    html2canvas(resultRef.current, { scale: 4 }).then(canvas => {
      const capturedImage = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = capturedImage;
      link.download = 'result_capture.png';
      link.click();
      setShowWatermark(false);
    });
  };

  return (
    <ResultContainer style={{ backgroundColor: scrollColor }}>
      <CaptureContainer ref={resultRef}>
        <ResultTitle>{voteResult.poll?.title}</ResultTitle>
        <ResultTotalPeople>
          <ResultTotal>총 투표수:</ResultTotal>
          <TotalPeople>{voteResult.statistics?.total_count}</TotalPeople>
          <ResultTotal>건</ResultTotal>
        </ResultTotalPeople>
        <ResultExplanation>{voteResult.poll?.content}</ResultExplanation>
        <ResponsiveContainer>
          <ResultTop voteResult={voteResult} />
          <TotalGraph voteResult={voteResult} />
          <ResultBtn onCapture={handleCapture} />
        </ResponsiveContainer>
      </CaptureContainer>
      <ResultGraph voteResult={voteResult} />
      <ResultInfo information={voteResult?.poll} />
      <Comment
        voteId={detailId}
        voteChoice={voteResult?.choice}
        comments={voteResult?.comments}
      />
      <LatestPolls voteList={voteResult?.latest_polls} />
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${props => props.theme.colors.pinkBgColor};
`;

const ResultTitle = styled.h1`
  word-break: keep-all;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 28px;
  font-family: 'GongGothicMedium';
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;

const ResultExplanation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 16px;
  word-break: keep-all;
  color: ${props => props.theme.colors.grayColor};
  @media (min-width: 768px) {
    margin-right: 10rem;
    margin-left: 10rem;
  }
`;

const CaptureContainer = styled.div``;

const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 35% 30% 35%;
  }
`;

const ResultTotalPeople = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

const ResultTotal = styled.div`
  font-family: 'GongGothicMedium';
  color: ${props => props.theme.colors.darkbluePrimaryColor};
`;

const TotalPeople = styled.div`
  margin-left: 10px;
  margin-right: 5px;
  color: ${props => props.theme.colors.redpinkPrimaryColor};
`;
