/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Text, Box, Flex, Heading, Button, jsx } from 'theme-ui';
import '../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeriesCanvas,
  VerticalBarSeries,
  LabelSeries,
  HorizontalBarSeries,
  FlexibleWidthXYPlot
} from 'react-vis';

const groupTranslations = {
  'current-situation': 'Current Situation',
  'health-situation': 'Health Situation',
  'Current activities': 'Current activities',
  'How do you feel?': 'How do you feel?',
  'personal-questions': 'Personal Questions'
};

const BarGraph = ({ data, labelData, width = 760, height = 300, xDistance = 100, color = '#6a1b9a' }) => (
  <FlexibleWidthXYPlot xType="ordinal" height={height}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    {/* <HorizontalBarSeries data={data} color={color} /> */}
    <VerticalBarSeries data={data} color={color} />
    {/* <LabelSeries data={labelData} getLabel={d => d.y} /> */}
  </FlexibleWidthXYPlot>
);

export const Report = ({ surveysAggregationData, questions, onSubmit }) => {
  const groups = {};
  questions.forEach(({ question, group, answerChoices, id, sort }) => {
    if (!groups[group]) {
      groups[group] = [];
    }

    const baseAnswerChoices = {};

    answerChoices.forEach(choice => {
      baseAnswerChoices[choice] = 0;
    });

    groups[group].push({
      question,
      sort,
      answerAggs: {
        ...baseAnswerChoices,
        ...surveysAggregationData[id]
      }
    });
  });

  return Object.keys(groups).map(group => (
    <Flex sx={{ flexDirection: 'column' }} key={`${group}-answer-aggs`} mb={3}>
      <Heading mt="4" color="primary">
        {groupTranslations[group]}
      </Heading>
      <Flex sx={{ flexDirection: 'column' }}>
        {groups[group].map(({ question, sort, answerAggs }, index) => {
          const data = Object.keys(answerAggs).map(answerChoice => ({
            x: answerChoice,
            y: answerAggs[answerChoice],
            xOffset: 5,
            rotation: 34
          }));

          return (
            <Flex key={`${group}-answer-aggs-${index}`} sx={{ flexDirection: 'column' }} mb={3}>
              <Text sx={{ width: '100%' }}>Question: {question}</Text>
              <Box mt={4}>
                <BarGraph data={data} />
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  ));
};
