import React from 'react';
import styled from 'styled-components';
import EIGraph from './EIGraph/EIGraph.js';
import PJGraph from './PJGraph/PJGraph.js';
import SNGraph from './SNGraph/SNGraph.js';
import TFGraph from './TFGraph/TFGraph.js';
import GenderGraph from './GenderGraph/GenderGraph.js';
import AgeGraph from './AgeGraph/AgeGraph.js';

const ResultGraph = ({ voteResult }) => {
  const man_choices = voteResult.statistics?.gender.M;
  const woman_choices = voteResult.statistics?.gender.W;

  const e_choices = voteResult.statistics?.mbti.E;
  const i_choices = voteResult.statistics?.mbti.I;
  const s_choices = voteResult.statistics?.mbti.S;
  const n_choices = voteResult.statistics?.mbti.N;
  const t_choices = voteResult.statistics?.mbti.T;
  const f_choices = voteResult.statistics?.mbti.F;
  const p_choices = voteResult.statistics?.mbti.P;
  const j_choices = voteResult.statistics?.mbti.J;

  const choices_10 = voteResult.statistics?.age['10'];
  const choices_20_1 = voteResult.statistics?.age['20_1'];
  const choices_20_2 = voteResult.statistics?.age['20_2'];
  const choices_30_1 = voteResult.statistics?.age['30_1'];
  const choices_30_2 = voteResult.statistics?.age['30_2'];
  const choices_40 = voteResult.statistics?.age['40'];

  const man_choicesArray = [];
  const woman_choicesArray = [];

  const e_choicesArray = [];
  const i_choicesArray = [];
  const s_choicesArray = [];
  const n_choicesArray = [];
  const t_choicesArray = [];
  const f_choicesArray = [];
  const p_choicesArray = [];
  const j_choicesArray = [];

  const choicesArray_10 = [];
  const choicesArray_20_1 = [];
  const choicesArray_20_2 = [];
  const choicesArray_30_1 = [];
  const choicesArray_30_2 = [];
  const choicesArray_40 = [];

  for (let i = 1; i <= 5; i++) {
    const choiceKey = `choice${i}`;

    if (man_choices?.hasOwnProperty(choiceKey)) {
      man_choicesArray.push(man_choices[choiceKey]);
    }
    if (woman_choices?.hasOwnProperty(choiceKey)) {
      woman_choicesArray.push(woman_choices[choiceKey]);
    }
    if (e_choices?.hasOwnProperty(choiceKey)) {
      e_choicesArray.push(e_choices[choiceKey]);
    }
    if (i_choices?.hasOwnProperty(choiceKey)) {
      i_choicesArray.push(i_choices[choiceKey]);
    }
    if (s_choices?.hasOwnProperty(choiceKey)) {
      s_choicesArray.push(s_choices[choiceKey]);
    }
    if (n_choices?.hasOwnProperty(choiceKey)) {
      n_choicesArray.push(n_choices[choiceKey]);
    }
    if (t_choices?.hasOwnProperty(choiceKey)) {
      t_choicesArray.push(t_choices[choiceKey]);
    }
    if (f_choices?.hasOwnProperty(choiceKey)) {
      f_choicesArray.push(f_choices[choiceKey]);
    }
    if (p_choices?.hasOwnProperty(choiceKey)) {
      p_choicesArray.push(p_choices[choiceKey]);
    }
    if (j_choices?.hasOwnProperty(choiceKey)) {
      j_choicesArray.push(j_choices[choiceKey]);
    }
    if (choices_10?.hasOwnProperty(choiceKey)) {
      choicesArray_10.push(choices_10[choiceKey]);
    }
    if (choices_20_1?.hasOwnProperty(choiceKey)) {
      choicesArray_20_1.push(choices_20_1[choiceKey]);
    }
    if (choices_20_2?.hasOwnProperty(choiceKey)) {
      choicesArray_20_2.push(choices_20_2[choiceKey]);
    }
    if (choices_30_1?.hasOwnProperty(choiceKey)) {
      choicesArray_30_1.push(choices_30_1[choiceKey]);
    }
    if (choices_30_2?.hasOwnProperty(choiceKey)) {
      choicesArray_30_2.push(choices_30_2[choiceKey]);
    }
    if (choices_40?.hasOwnProperty(choiceKey)) {
      choicesArray_40.push(choices_40[choiceKey]);
    }
  }

  return (
    <GraphContainer>
      <GraphCategory>카테고리</GraphCategory>
      {voteResult.poll?.category.some(item => item.name === 'gender') && (
        <GenderGraph
          choices={voteResult.poll?.choices}
          man_choices={man_choicesArray}
          woman_choices={woman_choicesArray}
        />
      )}
      {voteResult.poll?.category.some(item => item.name === 'mbti') && (
        <>
          <EIGraph
            choices={voteResult.poll?.choices}
            e_choices={e_choicesArray}
            i_choices={i_choicesArray}
          />

          <SNGraph
            choices={voteResult.poll?.choices}
            s_choices={s_choicesArray}
            n_choices={n_choicesArray}
          />

          <TFGraph
            choices={voteResult.poll?.choices}
            t_choices={t_choicesArray}
            f_choices={f_choicesArray}
          />

          <PJGraph
            choices={voteResult.poll?.choices}
            p_choices={p_choicesArray}
            j_choices={j_choicesArray}
          />
        </>
      )}
      {voteResult.poll?.category.some(item => item.name === 'age') && (
        <AgeGraph
          choices={voteResult.poll?.choices}
          choices_10={choicesArray_10}
          choices_20_1={choicesArray_20_1}
          choices_20_2={choicesArray_20_2}
          choices_30_1={choicesArray_30_1}
          choices_30_2={choicesArray_30_2}
          choices_40={choicesArray_40}
        />
      )}
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
