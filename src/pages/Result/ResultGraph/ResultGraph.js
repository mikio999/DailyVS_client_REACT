import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';
import EIGraph from './EIGraph/EIGraph.js';
import PJGraph from './PJGraph/PJGraph.js';
import SNGraph from './SNGraph/SNGraph.js';
import TFGraph from './TFGraph/TFGraph.js';
import GenderGraph from './GenderGraph/GenderGraph.js';

const ResultGraph = ({ voteResult }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartId, setChartId] = useState(null);

  useEffect(() => {
    if (voteResult) {
      const ctx = chartRef.current.getContext('2d');
      const graphData = {
        labels: [voteResult.option_1, voteResult.option_2],
        percentages: [
          voteResult.option_1_percentage,
          voteResult.option_2_percentage,
        ],
      };

      // 이전 차트 파괴
      if (chartId) {
        chartInstance.current.destroy();
      }

      // 새로운 ID 생성
      const newChartId = `chart-${Date.now()}`;
      setChartId(newChartId);

      // 차트 그리기
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: graphData.labels,
          datasets: [
            {
              data: graphData.percentages,
              backgroundColor: ['#17355a', '#ff495a'],
            },
          ],
        },
        options: {
          responsive: false,
          legend: {
            position: 'bottom',
          },
        },
      });
    }
  }, [voteResult]);

  return (
    <GraphContainer>
      <canvas ref={chartRef} style={{ margin: '10px auto' }}></canvas>
      <GenderGraph
        option1={voteResult.option_1}
        option2={voteResult.option_2}
        choice1ManPercentage={voteResult.choice1_man_percentage}
        choice2ManPercentage={voteResult.choice2_man_percentage}
        choice1WomanPercentage={voteResult.choice1_woman_percentage}
        choice2WomanPercentage={voteResult.choice2_woman_percentage}
      />
      <EIGraph
        option1={voteResult.option_1}
        option2={voteResult.option_2}
        eChoice1Percentage={voteResult.e_choice1_percentage}
        iChoice1Percentage={voteResult.i_choice1_percentage}
        eChoice2Percentage={voteResult.e_choice2_percentage}
        iChoice2Percentage={voteResult.i_choice2_percentage}
      />
      <SNGraph
        option1={voteResult.option_1}
        option2={voteResult.option_2}
        sChoice1Percentage={voteResult.s_choice1_percentage}
        nChoice1Percentage={voteResult.n_choice1_percentage}
        sChoice2Percentage={voteResult.n_choice2_percentage}
        nChoice2Percentage={voteResult.n_choice2_percentage}
      />
      <TFGraph
        option1={voteResult.option_1}
        option2={voteResult.option_2}
        tChoice1Percentage={voteResult.t_choice1_percentage}
        fChoice1Percentage={voteResult.f_choice1_percentage}
        tChoice2Percentage={voteResult.t_choice2_percentage}
        fChoice2Percentage={voteResult.f_choice2_percentage}
      />
      <PJGraph
        option1={voteResult.option_1}
        option2={voteResult.option_2}
        pChoice1Percentage={voteResult.p_choice1_percentage}
        jChoice1Percentage={voteResult.j_choice1_percentage}
        pChoice2Percentage={voteResult.p_choice2_percentage}
        jChoice2Percentage={voteResult.j_choice2_percentage}
      />
    </GraphContainer>
  );
};

export default ResultGraph;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;
