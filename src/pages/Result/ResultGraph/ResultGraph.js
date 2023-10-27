import React from 'react';
import styled from 'styled-components';
import EIGraph from './EIGraph/EIGraph.js';
import PJGraph from './PJGraph/PJGraph.js';
import SNGraph from './SNGraph/SNGraph.js';
import TFGraph from './TFGraph/TFGraph.js';
import GenderGraph from './GenderGraph/GenderGraph.js';
import AgeGraph from './AgeGraph/AgeGraph.js';

const ResultGraph = ({ voteResult }) => {
  console.log('voteResult', voteResult);
  const man_choices = [];
  const woman_choices = [];
  const e_choices = [];
  const i_choices = [];
  const s_choices = [];
  const n_choices = [];
  const t_choices = [];
  const f_choices = [];
  const p_choices = [];
  const j_choices = [];

  for (let i = 1; i <= voteResult.statistics?.choice_count; i++) {
    const manPercentageKey = `choice${i}_M_percentage`;
    const womanPercentageKey = `choice${i}_W_percentage`;
    const EPercentageKey = `choice${i}_E_percentage`;
    const IPercentageKey = `choice${i}_I_percentage`;
    const SPercentageKey = `choice${i}_S_percentage`;
    const NPercentageKey = `choice${i}_N_percentage`;
    const TPercentageKey = `choice${i}_T_percentage`;
    const FPercentageKey = `choice${i}_F_percentage`;
    const PPercentageKey = `choice${i}_P_percentage`;
    const JPercentageKey = `choice${i}_J_percentage`;

    man_choices.push(voteResult.statistics[manPercentageKey]);
    woman_choices.push(voteResult.statistics[womanPercentageKey]);
    e_choices.push(voteResult.statistics[EPercentageKey]);
    i_choices.push(voteResult.statistics[IPercentageKey]);
    s_choices.push(voteResult.statistics[SPercentageKey]);
    n_choices.push(voteResult.statistics[NPercentageKey]);
    t_choices.push(voteResult.statistics[TPercentageKey]);
    f_choices.push(voteResult.statistics[FPercentageKey]);
    p_choices.push(voteResult.statistics[PPercentageKey]);
    j_choices.push(voteResult.statistics[JPercentageKey]);
  }

  console.log('choices: ', voteResult.poll?.choices);
  console.log('t_choices:', t_choices);
  console.log('f_choices:', f_choices);
  return (
    <GraphContainer>
      <GraphCategory>카테고리</GraphCategory>
      <GenderGraph
        choices={voteResult.poll?.choices}
        man_choices={man_choices}
        woman_choices={woman_choices}
      />
      <EIGraph
        choices={voteResult.poll?.choices}
        e_choices={e_choices}
        i_choices={i_choices}
      />
      <SNGraph
        choices={voteResult.poll?.choices}
        s_choices={s_choices}
        n_choices={n_choices}
      />
      <TFGraph
        choices={voteResult.poll?.choices}
        t_choices={t_choices}
        f_choices={f_choices}
      />
      <PJGraph
        choices={voteResult.poll?.choices}
        p_choices={p_choices}
        j_choices={j_choices}
      />
      <AgeGraph
        option1={voteResult.option_1}
        option2={voteResult.option_2}
        choice1_10_Percentage={voteResult.choice1_10_percentage}
        choice2_10_Percentage={voteResult.choice2_10_percentage}
        choice1_20_1_Percentage={voteResult.choice1_20_1_percentage}
        choice2_20_1_Percentage={voteResult.choice2_20_1_percentage}
        choice1_20_2_Percentage={voteResult.choice1_20_2_percentage}
        choice2_20_2_Percentage={voteResult.choice2_20_2_percentage}
        choice1_30_1_Percentage={voteResult.choice1_30_1_percentage}
        choice2_30_1_Percentage={voteResult.choice2_30_1_percentage}
        choice1_30_2_Percentage={voteResult.choice1_30_2_percentage}
        choice2_30_2_Percentage={voteResult.choice2_30_2_percentage}
        choice1_40_Percentage={voteResult.choice1_40_percentage}
        choice2_40_Percentage={voteResult.choice2_40_percentage}
      />
    </GraphContainer>
  );
};

export default ResultGraph;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 30px;
`;

const GraphCategory = styled.h1`
  margin-top: 30px;
  font-size: 24px;
  font-family: 'GongGothicLight';
  color: ${props => props.theme.colors.turquoisSecondaryColor};
`;
