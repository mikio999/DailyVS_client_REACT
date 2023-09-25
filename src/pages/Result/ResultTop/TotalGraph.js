import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

const TotalGraph = ({ voteResult }) => {
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
      <canvas ref={chartRef} style={{ margin: '0px auto' }}></canvas>
    </GraphContainer>
  );
};

export default TotalGraph;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;
