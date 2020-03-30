/** @jsx jsx */
import React from 'react';
import { Text, Box, Flex, Heading, jsx, Divider } from 'theme-ui';
import { BarGraph } from './components';

const groupTranslations = {
  'current-situation': 'Current Situation',
  'health-situation': 'Health Situation',
  'Current activities': 'Current activities',
  'How do you feel?': 'How do you feel?',
  'personal-questions': 'Personal Questions'
};

const ALPHABET = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

export const Report = ({ surveysAggregationData, questions, onSubmit }) => {
  const groups = {};
  questions.forEach(({ question, group, answerChoices, id, sort, answerType }) => {
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
      answerType,
      answerAggs: {
        ...baseAnswerChoices,
        ...surveysAggregationData[id]
      }
    });
  });

  return Object.keys(groups).map((group, groupIndex) => (
    <React.Fragment>
      {groupIndex !== 0 && <Divider sx={{ border: 'solid 3px' }} />}
      <Flex sx={{ flexDirection: 'column' }} key={`${group}-answer-aggs`} mb={3}>
        <Heading as="h1" mt="4" mb={3} color="primary">
          {groupTranslations[group]}
        </Heading>
        <Flex sx={{ flexDirection: 'column' }}>
          {groups[group].map(({ question, sort, answerAggs, answerType }, questionIndex) => {
            const choicesDic = {};

            const data = Object.keys(answerAggs).map((answerChoice, answerIndex) => {
              choicesDic[ALPHABET[answerIndex]] = answerChoice;
              return {
                x: answerType === 'yes-no' ? answerChoice : ALPHABET[answerIndex],
                y: answerAggs[answerChoice]
              };
            });

            // to have a top padding in the graphs
            const labelData = data.map(({ x, y }) => ({
              x,
              y: y * 1.4
            }));

            return (
              <React.Fragment>
                <Flex key={`${group}-answer-aggs-${questionIndex}`} sx={{ flexDirection: 'column' }} mb={4}>
                  {questionIndex !== 0 && <Divider mb={4} />}
                  <Text sx={{ width: '100%', fontSize: 4 }}>Question: {question}</Text>
                  <Box mt={4}>
                    <BarGraph data={data} labelData={labelData} />
                  </Box>
                  {answerType !== 'yes-no' && (
                    <Box pl={[0, 1, 1]}>
                      {Object.keys(choicesDic).map((char, choiceIndex) => (
                        <Flex key={`choices-${group}-answer-aggs-${questionIndex}-${choiceIndex}`}>
                          <Text mr={3}>{char}:</Text>
                          <Text>{choicesDic[char]}</Text>
                        </Flex>
                      ))}
                    </Box>
                  )}
                </Flex>
              </React.Fragment>
            );
          })}
        </Flex>
      </Flex>
    </React.Fragment>
  ));
};
