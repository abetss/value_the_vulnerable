/** @jsx jsx */
import React, { useCallback, useState, useEffect } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { jsx } from 'theme-ui';
import { Introduction, Layout, SubmissionThankYou } from '../components';
import { Questionary } from '../features/questionary/Questionary.container';
import { newQuestions, answersAgs } from './questions';
import { Report } from '../features/report/Report.container';
import { getAnswers, getQuestions, submitQuestionnaire } from '../firebase/firestore';

function App() {
  const [surveysAggregationData, setSurveysAggregationData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [pageName, setPageName] = useState('introduction');

  const handleSurveySubmission = useCallback(submission => {
    setPageName('thankyou');

    submitQuestionnaire(submission);

    getAnswers().then(answers => {
      console.log('answers after submission', JSON.stringify(answers, null, 2));
      setSurveysAggregationData(answers);
    });
  }, []);

  useEffect(function() {
    setQuestions(newQuestions);
    setSurveysAggregationData(answersAgs);
    // getQuestions().then(data => {
    //   // will return the json stored at questions.all.data
    //   console.log('data', data);
    //   setQuestions(data);
    // });
    // getAnswers().then(answers => {
    //   console.log('answers', JSON.stringify(answers, null, 2));
    //   setSurveysAggregationData(answers);
    // });
  }, []);

  // const surveyResults =

  const sortedQuestions = questions.sort((a, b) => Number(a.sort) - Number(b.sort));
  // .slice(0, 4); // uncomment if you wanna test submission with only 4 questions

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {pageName === 'introduction' && (
          <Introduction onNextClicked={setPageName} showLoading={questions.length === 0} />
        )}
        {pageName === 'survey' && <Questionary questions={sortedQuestions} onSubmit={handleSurveySubmission} />}
        {pageName === 'thankyou' && <SubmissionThankYou onSetPage={setPageName} />}
        {pageName === 'report' && (
          <Report surveysAggregationData={surveysAggregationData} questions={sortedQuestions} />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export { App };
