import React from 'react';
import { View } from 'react-native';
import Svg, { Line, Path, Text } from 'react-native-svg';

export const MultilineChart = () => {
  const data1 = [
    { x: 0, y: 5 },
    { x: 5, y: 3 },
    { x: 10, y: 8 },
    { x: 15, y: 4 },
    { x: 20, y: 7 },
  ];

  const data2 = [
    { x: 0, y: 2 },
    { x: 5, y: 6 },
    { x: 10, y: 5 },
    { x: 15, y: 8 },
    { x: 20, y: 3 },
  ];

  const data3 = [
    { x: 0, y: 8 },
    { x: 5, y: 4 },
    { x: 10, y: 2 },
    { x: 15, y: 6 },
    { x: 20, y: 9 },
  ];

  /* @ts-ignore */
  const xScale = (value) => (value / 20) * 300;
    /* @ts-ignore */
  const yScale = (value) => (value / 10) * 300;

  const pathData1 = data1.reduce((acc, { x, y }, index) => {
    const xCoord = xScale(x) + 10;
    const yCoord = yScale(y) + 10;
    if (index === 0) {
      return `M ${xCoord} ${yCoord} `;
    } else {
      return `${acc} L ${xCoord} ${yCoord} `;
    }
  }, '');

  const pathData2 = data2.reduce((acc, { x, y }, index) => {
    const xCoord = xScale(x) + 10;
    const yCoord = yScale(y) + 10;
    if (index === 0) {
      return `M ${xCoord} ${yCoord} `;
    } else {
      return `${acc} L ${xCoord} ${yCoord} `;
    }
  }, '');

  const pathData3 = data3.reduce((acc, { x, y }, index) => {
    const xCoord = xScale(x) + 10;
    const yCoord = yScale(y) + 10;
    if (index === 0) {
      return `M ${xCoord} ${yCoord} `;
    } else {
      return `${acc} L ${xCoord} ${yCoord} `;
    }
  }, '');

  return (
    <View>
      <Svg width="320" height="320">
        <Line x1="10" y1="10" x2="10" y2="310" stroke="black" strokeWidth="2" />
        <Line x1="10" y1="310" x2="310" y2="310" stroke="black" strokeWidth="2" />
        {Array.from({ length: 5 }).map((_, index) => (
          <Text key={index} x={xScale(index * 5) + 10} y="325" fontSize="14" textAnchor="middle">
            {index * 5}
          </Text>
        ))}
        {Array.from({ length: 11 }).map((_, index) => (
          <Text key={index} x="0" y={yScale(index * 1) + 15} fontSize="14" textAnchor="end">
            {index}
          </Text>
        ))}
        <Path d={pathData1} stroke="red" strokeWidth="2" fill="none" />
        <Path d={pathData2} stroke="blue" strokeWidth="2" fill="none" />
        <Path d={pathData3} stroke="green" strokeWidth="2" fill="none" />
      </Svg>
    </View>
  );
};
