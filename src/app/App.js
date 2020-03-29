/** @jsx jsx */
import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { jsx } from 'theme-ui';
import { Introduction, Layout } from '../components';
import { Questionary } from '../features/questionary/Questionary.container';
import { questions } from './questions';

function App() {
  const [surveysAggregationData, setSurveysAggregationData] = useState(null);

  const handleSurveySubmission = useCallback(submission => {
    /* add logic to handle survey submission here
    /
    / after the server responded with surveys aggregation data, call setSurveysAggregationData with
    / that data as the argument
    /
    / submission object shape is like:
    [
      {
        questionId: 1,
        answer: 'some answer in string if type is string or number if type is number',
        explainMore: 'optional text here',
        type: 'string | number',
        group:1
      },
      {
        questionId: 2,
        answer: 'some answer in string if type is string or number if type is number',
        explainMore: 'optional text here',
        type: 'string | number',
        group:1
      }
    ]
    I wonder if we need to add the question text there too?
    */
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Introduction /> */}
        <Questionary questions={questions.sort((a, b) => a.sort < b.sort)} onSubmit={handleSurveySubmission} />
      </Layout>
    </ThemeProvider>
  );
}

export { App };
