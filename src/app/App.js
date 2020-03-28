/** @jsx jsx */
import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { jsx } from 'theme-ui';
import { Layout } from './components/Layout';

const questions = [
  {
    // shape of the json objects
    question: 'Question text',
    answerType: 'multiple', // can be one of "yes-no" or "multiple" or "text"
    answerChoices: ['ex: answer 1', 'ex: answer 2'], // all the choices for answerType: multiple
    explainMoreText: 'ex: specify profession', // the label to more info input text
    sort: 1, // the order of which the user will see the questions
    group: 'ex: personal question' // I don't know if we need this, but if we wanna group questions we could use this field
  },
  {
    // example 1 from the questions
    question: 'How do you perceive your physical health',
    answerType: 'multiple',
    answerChoices: ['Worse than before', 'Similar / Unchanged', 'better than before'],
    explainMoreText: null,
    sort: 2,
    group: null
  },
  {
    // example 2 from the questions
    question: 'Have you experienced any shortage of household goods',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: 'Specify goods',
    sort: 2,
    group: null
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <span>Main content</span>
      </Layout>
    </ThemeProvider>
  );
}

export { App };
