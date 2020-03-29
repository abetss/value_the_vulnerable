/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Text, Box, Flex, Button, jsx } from 'theme-ui';
import { Question } from './components/Questions';
import { SecondaryButton, PrimaryButton } from '../../components';

export const Questionary = ({ questions = [], onComplete }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  // const [answers, setAnswers] = useState([]);

  const handlePrevClick = useCallback(() => {
    if (questionIndex === -1) return;
    setQuestionIndex(questionIndex - 1);
  }, [questionIndex]);

  // const handleNextClick = useCallback(() => {
  //   // setAnswers([])
  //   setQuestionIndex(questionIndex - 1);
  // }, [questionIndex]);

  // const handleOnAnswerChange = useCallback(() => {
  //   setAnswers
  // })

  const handleOnChange = useCallback(data => {
    console.log('data', data);
  }, []);

  const question = questions[questionIndex];

  if (!question) {
    return <Text>There was an error with are data. We will try to fix it ASAP.</Text>;
  }

  return (
    <React.Fragment>
      <Question {...question} total={questions.length} onChange={handleOnChange} questionNumber={questionIndex + 1} />

      <Box alignItems="center">
        <SecondaryButton disable={true} title="Prev" onClick={handlePrevClick} />
        {questionIndex < questions.length && (
          <PrimaryButton title="Next" onClick={() => setQuestionIndex(questionIndex + 1)} />
        )}
        {questionIndex === questions.length && (
          <PrimaryButton title="Submit" onClick={() => setQuestionIndex(questionIndex)} />
        )}
      </Box>
    </React.Fragment>
  );
};

/* answers:
  [
    {
      sort: 1,
      answer: 'asd',
      explainMore: '',
      type: 'string | number'
    }
  ]
*/
