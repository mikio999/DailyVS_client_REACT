import React from 'react';
import styled from 'styled-components';

import GenderGraph from './GenderGraph/GenderGraphAnalysis/GenderGraphAnalysis';
import SNGraphAnalysis from './SNGraph/SNGraphAnalysis';
import PJGraphAnalysis from './PJGraph/PJGraphAnalysis';
import TFGraphAnalysis from './TFGraph/TFGraphAnalysis';
import EIGraphAnalysis from './EIGraph/EIGraphAnalysis';
const AnalysisChart = ({ voteResult, SpecialKey }) => {
  let selectedGraphComponent = null;

  switch (SpecialKey) {
    case '남성':
    case '여성':
      selectedGraphComponent = <GenderGraph voteResult={voteResult} />;
      break;
    case 'E':
    case 'I':
      selectedGraphComponent = (
        <EIGraphAnalysis
          option1={voteResult.option_1}
          option2={voteResult.option_2}
          eChoice1Percentage={voteResult.e_choice1_percentage}
          iChoice1Percentage={voteResult.i_choice1_percentage}
          eChoice2Percentage={voteResult.e_choice2_percentage}
          iChoice2Percentage={voteResult.i_choice2_percentage}
        />
      );
      break;
    case 'S':
    case 'N':
      selectedGraphComponent = (
        <SNGraphAnalysis
          option1={voteResult.option_1}
          option2={voteResult.option_2}
          sChoice1Percentage={voteResult.s_choice1_percentage}
          nChoice1Percentage={voteResult.n_choice1_percentage}
          sChoice2Percentage={voteResult.n_choice2_percentage}
          nChoice2Percentage={voteResult.n_choice2_percentage}
        />
      );
      break;
    case 'T':
    case 'F':
      selectedGraphComponent = (
        <TFGraphAnalysis
          option1={voteResult.option_1}
          option2={voteResult.option_2}
          tChoice1Percentage={voteResult.t_choice1_percentage}
          fChoice1Percentage={voteResult.f_choice1_percentage}
          tChoice2Percentage={voteResult.t_choice2_percentage}
          fChoice2Percentage={voteResult.f_choice2_percentage}
        />
      );
      break;
    case 'P':
    case 'J':
      selectedGraphComponent = (
        <PJGraphAnalysis
          option1={voteResult.option_1}
          option2={voteResult.option_2}
          pChoice1Percentage={voteResult.p_choice1_percentage}
          jChoice1Percentage={voteResult.j_choice1_percentage}
          pChoice2Percentage={voteResult.p_choice2_percentage}
          jChoice2Percentage={voteResult.j_choice2_percentage}
        />
      );
      break;
    default:
      selectedGraphComponent = null;
  }
  return (
    <Container>
      <ChartSort>{selectedGraphComponent}</ChartSort>
    </Container>
  );
};

export default AnalysisChart;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ChartSort = styled.div``;
