import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

const ResultGraph = ({ votedResult }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (votedResult) {
      const ctx = chartRef.current.getContext('2d');
      const graphData = {
        labels: [votedResult.option_1, votedResult.option_2],
        percentages: [
          votedResult.option_1_percentage,
          votedResult.option_2_percentage,
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
  }, [votedResult]);

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
