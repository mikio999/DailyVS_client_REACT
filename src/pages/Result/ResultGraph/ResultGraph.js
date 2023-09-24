import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

const ResultGraph = ({ voteResult }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

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

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      new Chart(ctx, {
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
      <canvas ref={chartRef} width="320" height="320"></canvas>
    </GraphContainer>
  );
};

export default ResultGraph;

const GraphContainer = styled.div`
  display: flex;
  margin: 30px auto;
`;
