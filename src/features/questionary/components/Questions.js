/** @jsx jsx */
import React from 'react';
import { Text, Box, Flex, Input, jsx, Label, Radio, Textarea } from 'theme-ui';

const MultipleChoices = ({ name, choices, questionNumber, onChange, ...props }) => {
  return (
    <Flex mb={3}>
      {choices.map((choice, index) => (
        <Label key={`choices-${questionNumber}-${index}`}>
          <Radio name={name} onChange={onChange} /> {choice}
        </Label>
      ))}
    </Flex>
  );
};

const NumberInput = ({ onChange }) => (
  <React.Fragment>
    <Input mb={3} type="number" onChange={onChange} />
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
      </Box>
      <Box>
        <Text as="span" sx={{ fontSize: 4 }}>
          {question}
        </Text>
      </Box>
      <Box mt="3">
        {(answerType === 'multiple' || answerType === 'yes-no') && (
          <MultipleChoices
            choices={answerType === 'multiple' ? answerChoices : ['Yes', 'No']}
            name={answerType}
            questionNumber={questionNumber}
          />
        )}
        {answerType === 'text' && <TextInput type={answerType} onChange={onChange} />}
        {answerType === 'number' && <NumberInput onChange={onChange} />}
        {explainMoreText && <TextInput type="text" label={explainMoreText} onChange={onChange} />}
      </Box>
    </Flex>
  );
};
