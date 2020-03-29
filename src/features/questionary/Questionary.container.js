/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Text, Box, Flex, Button, jsx, Progress } from 'theme-ui';
import { Question } from './components/Questions';
import { SecondaryButton, PrimaryButton } from '../../components';

// to handle usecases when the user hasn't answered a question before click next
const getAnswerOrEmptyAnswer = (questionAnswer, question) => {
  if (JSON.stringify(questionAnswer) !== '{}') {
    return questionAnswer;
  } else {
    const questionAnswerFixProps = {
      questionId: question.id,
      group: question.group,
      type: question.answerType === 'number' ? 'number' : 'string'
    };

    const answer = {
      ...questionAnswerFixProps,
      ...questionAnswer,
      answer: '',
      explainMore: ''
    };
    return answer;
  }
};

export const Questionary = ({ questions = [], onSubmit }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionAnswer, setQuestionAnswer] = useState({});
  const [answers, setAnswers] = useState({});

  const question = questions[questionIndex];

  const handlePrevClick = useCallback(() => {
    if (questionIndex === -1) return;
    setQuestionIndex(questionIndex - 1);
  }, [questionIndex]);

  const handleNextClick = useCallback(answerData => {
    const answer = getAnswerOrEmptyAnswer(questionAnswer, question);

    const newAnswers = { ...answers, [answer.questionId]: answer };
    setAnswers(newAnswers);
    setQuestionAnswer({});
    setQuestionIndex(questionIndex + 1);
  });

  const handleSubmitClick = useCallback(() => {
    const answer = getAnswerOrEmptyAnswer(questionAnswer, question);
    const newAnswers = { ...answers, [answer.questionId]: answer };
    setAnswers(newAnswers);
    setQuestionAnswer({});
    onSubmit(Object.values(newAnswers));
  });

  const handleOnChange = useCallback(
    answerData => {
      const questionAnswerFixProps = {
        questionId: question.id,
        group: question.group,
        type: question.answerType === 'number' ? 'number' : 'string'
      };

      const answer = {
        ...questionAnswerFixProps,
        ...questionAnswer,
        answer: answerData.answer ? answerData.answer : questionAnswer.answer,
        explainMore: answerData.explainMore ? answerData.explainMore : questionAnswer.explainMore
      };

      setQuestionAnswer(answer);
    },
    [question.id, question.answerType, questionAnswer, question.group]
  );

  if (!question) {
    return <Text>There was an error with are data. We will try to fix it ASAP.</Text>;
  }

  return (
    <React.Fragment>
      <Question {...question} total={questions.length} onChange={handleOnChange} questionNumber={questionIndex + 1} />

      <Box alignItems="center">
        <SecondaryButton disable={true} title="Prev" onClick={handlePrevClick} />
        {questionIndex < questions.length - 1 && <PrimaryButton title="Next" onClick={handleNextClick} />}
        {questionIndex === questions.length - 1 && <PrimaryButton title="Submit" onClick={handleSubmitClick} />}
      </Box>
    </React.Fragment>
  );
};
