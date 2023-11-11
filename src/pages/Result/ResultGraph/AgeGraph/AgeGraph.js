import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const AgeGraph = ({
  choices,
  choices_10,
  choices_20_1,
  choices_20_2,
  choices_30_1,
  choices_30_2,
  choices_40,
}) => {
  const [isRotated, setIsRotated] = useState(false);
  const [isGraphVisible, setIsGraphVisible] = useState(true);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
    setIsGraphVisible(!isGraphVisible);
  };

  const getChartColors = length => {
    if (length === 2) {
      return ['#17355a', '#ff495a'];
    } else {
      return ['#17355a', '#457c9e', '#a7dcdd', '#D9D9D9', '#4F4F4F'];
    }
  };

  const choiceColors = getChartColors(choices?.length);

  const chartData = {
    series: [],

    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,

        stackType: '100%',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          '10대',
          '20대 초반',
          '20대 후반',
          '30대 초반',
          '30대 후반',
          '40대 이상',
        ],
      },
      fill: {
        opacity: 1,
        colors: getChartColors(choices?.length),
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
        colors: getChartColors(choices?.length),
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
  };

  choices?.forEach((choice, index) => {
    chartData.series.push({
      name: choice.choice_text,
      data: [
        choices_10[index],
        choices_20_1[index],
        choices_20_2[index],
        choices_30_1[index],
        choices_30_2[index],
        choices_40[index],
      ],
    });
  });

  return (
    <Container>
      <Toggler onClick={toggleRotation}>
        <Chevron
          src={require('../../../../assets/Buttons/chevron.png')}
          alt="chevron"
          className={isRotated ? '' : 'rotated'}
        />
        연령대
      </Toggler>
      {isGraphVisible && (
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={chartData.options.chart.height}
          />
        </div>
      )}
      <Information>
        {choices.map((choice, index) => (
          <Option key={index}>
            <ChoiceCircle
              style={{ backgroundColor: choiceColors[index] || '#D9D9D9' }}
            />
            <OptionName>{choice.choice_text}</OptionName>
          </Option>
        ))}
      </Information>
    </Container>
  );
};

export default AgeGraph;

const Container = styled.div`
  width: 400px;
  & span {
    font-family: 'NEXON Lv1 Gothic OTF';
    font-size: 10px;
  }

  & .apexcharts-legend {
    display: none;
  }
`;

const Toggler = styled.div`
  display: flex;
  align-items: center;
  font-family: 'GongGothicMedium';
  font-size: 18px;
  color: ${props => props.theme.colors.darkbluePrimaryColor};
  margin-top: 30px;
`;

const Chevron = styled.img`
  margin-right: 20px;
  width: 30px;
  &.rotated {
    transform: rotate(180deg);
  }
  transition: transform 0.3s ease;
`;

const Information = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionName = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 0;
  align-items: center;
  font-size: 12px;
  color: ${props => props.theme.colors.grayColor};
`;

const ChoiceCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100vw;
  margin: 0 auto;
`;
