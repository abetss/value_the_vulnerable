/** @jsx jsx */
import React from 'react';
import { Text, Box, Flex, Input, jsx, Label, Radio, Textarea, Progress } from 'theme-ui';

const MultipleChoices = ({ name, choices, questionNumber, onChange, ...props }) => {
  return (
    <Flex mb={3} sx={{ flexDirection: 'column' }}>
      {choices.map((choice, index) => (
        <Label key={`choices-${questionNumber}-${index}`} sx={{ alignItems: 'center' }}>
          <Radio
            sx={{ ml: 3 }}
            name={name}
            onChange={() => {
              onChange({ answer: choice });
            }}
          />{' '}
          <Text sx={{ 'white-space': 'nowrap' }}>{choice}</Text>
        </Label>
      ))}
    </Flex>
  );
};

const NumberInput = ({ onChange }) => (
  <React.Fragment>
    <Input mb={3} sx={{ width: 4 }} type="number" onChange={onChange} />
  </React.Fragment>
);

const TextInput = ({ name = 'input-x', label, type, onChange }) => (
  <React.Fragment>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Textarea name={name} rows="3" mb={3} onChange={onChange} />
  </React.Fragment>
);

export const Question = ({ question, answerType, answerChoices, explainMoreText, questionNumber, total, onChange }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box mt="3">
        <Text as="span" sx={{ fontSize: 2 }}>
          Question {questionNumber} of {total}
        </Text>
        <Progress max={1} value={questionNumber / total}>
          {' '}
          Question {questionNumber} of {total}
        </Progress>
      </Box>
      <Box mt="3">
        <Text as="span" sx={{ fontSize: 4 }}>
          {question}
        </Text>
      </Box>
      <Box mt="4">
        {(answerType === 'multiple' || answerType === 'single' || answerType === 'yes-no') && (
          <MultipleChoices
            choices={answerType === 'multiple' || answerType === 'single' ? answerChoices : ['Yes', 'No']}
            name={answerType}
            questionNumber={questionNumber}
            onChange={onChange}
          />
        )}
        {answerType === 'text' && <TextInput type={answerType} onChange={e => onChange({ answer: e.target.value })} />}
        {answerType === 'number' && <NumberInput onChange={e => onChange({ answer: e.target.value })} />}
        {explainMoreText && (
          <TextInput type="text" label={explainMoreText} onChange={e => onChange({ explainMore: e.target.value })} />
        )}
      </Box>
    </Flex>
  );
};
