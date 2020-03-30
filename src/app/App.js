/** @jsx jsx */
import { useCallback, useState, useEffect } from 'react';
// import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { jsx } from 'theme-ui';
import { Introduction, Layout, SubmissionThankYou } from '../components';
import { Questionary } from '../features/questionary/Questionary.container';
import { newQuestions, answersAgs } from './questions';
import { Report } from '../features/report/Report.container';
import { getAnswers, getQuestions, submitQuestionnaire } from '../firebase/firestore';

function App() {
  const [surveysAggregationData, setSurveysAggregationData] = useState(answersAgs); // tODO: remove the default mock value
  const [questions, setQuestions] = useState(newQuestions);
  const [pageName, setPageName] = useState('introduction');

  const handleSurveySubmission = useCallback(submission => {
    setPageName('thankyou');

    submitQuestionnaire(submission);

    getAnswers().then(answers => {
      setSurveysAggregationData(answers);
    });
  }, []);

  useEffect(function() {
    getQuestions().then(data => {
      console.log('data', data);
      // will return the json stored at questions.all.data
      setQuestions(data);
    });
    getAnswers().then(answers => {
      setSurveysAggregationData(answers);
    });
  }, []);

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
