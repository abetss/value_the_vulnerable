/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Text, Box, Flex, Button, jsx } from 'theme-ui';
import { Question } from './components/Questions';
import { SecondaryButton, PrimaryButton } from '../../components';

export const Questionary = ({ questions = [], onComplete }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState([]);

  const handlePrevClick = useCallback(() => {
    if (questionNumber === 0) return;
    setQuestionNumber(questionNumber - 1);
  }, [questionNumber]);

  const handleNextClick = useCallback(() => {
    // setAnswers([])
    setQuestionNumber(questionNumber - 1);
  }, [questionNumber]);

  // const handleOnAnswerChange = useCallback(() => {
  //   setAnswers
  // })

  const handleOnChange = useCallback(data => {
    console.log('data', data);
  }, []);

  const question = questions.find(q => q.sort === questionNumber);

  if (!question) {
    return <Text>There was an error with are data. We will try to fix it ASAP.</Text>;
  }

  return (
    <React.Fragment>
      <Question {...question} total={questions.length} onChange={handleOnChange} />

      <Box alignItems="center">
        <SecondaryButton disable={true} title="Prev" onClick={handlePrevClick} />
        {questionNumber < questions.length && (
          <PrimaryButton title="Next" onClick={() => setQuestionNumber(questionNumber + 1)} />
        )}
        {questionNumber === questions.length && (
          <PrimaryButton title="Submit" onClick={() => setQuestionNumber(questionNumber)} />
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
