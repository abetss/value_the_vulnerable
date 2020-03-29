/** @jsx jsx */
import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { jsx } from 'theme-ui';
import { Introduction, Layout } from '../components';
import { Questionary } from '../features/questionary/Questionary.container';

const questions = [
  {
    // shape of the json objects
    question: 'How do you perceive your mental health?',
    answerType: 'multiple', // can be one of "yes-no" or "multiple" or "text"
    answerChoices: ['Sad', 'Neutral', 'Happy', 'Tired'], // all the choices for answerType: multiple
    explainMoreText: 'Specify profession', // the label to more info input text
    sort: 1, // the order of which the user will see the questions
    group: 'ex: personal question' // I don't know if we need this, but if we wanna group questions we could use this field
  },
  {
    // example 1 from the questions
    question: 'If you are quarantined, how many people are you quarantined with?',
    answerType: 'multiple',
    answerChoices: ['Worse than before', 'Similar / Unchanged', 'better than before'],
    explainMoreText: null,
    sort: 2
  },
  {
    // example 2 from the questions
    question: 'Have you experienced any shortage of household goods?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: 'Specify goods',
    sort: 3
  },
  {
    // example 3 from the questions
    question: 'How many dependant do you have?',
    answerType: 'number',
    answerChoices: [],
    explainMoreText: null,
    sort: 4
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Introduction /> */}
        <Questionary questions={questions} />
      </Layout>
    </ThemeProvider>
  );
}

export { App };
