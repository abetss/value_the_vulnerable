export const questions = [
  {
    question: 'How are you coping with the crisis?',
    answerType: 'multiple',
    answerChoices: ['Very Poorly', 'Somewhat Poorly', 'Neutral', 'Somewhat Well', 'Very Well'],
    explainMoreText: null,
    id: 1,
    sort: 1,
    group: 'personal questions'
  },

  {
    question: 'What is your current situation (due to the crisis)?',
    answerType: 'multiple',
    answerChoices: [
      'quarantine due to infection',
      'quarantine due to law',
      'voluntary quarantine',
      'just a little less outside / social',
      'no change to previous situation'
    ],
    explainMoreText: 'Other: Explain',
    id: 2,
    sort: 2,
    group: 'situational questions'
  },

  {
    question: 'Are you working outside the home?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 3,
    sort: 3,
    group: 'situational questions'
  },

  {
    question: 'Are you working at home?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 4,
    sort: 4,
    group: 'situational questions'
  },

  {
    question: 'If you are quarantined, how many people are you quarantined with?',
    answerType: 'number',
    answerChoices: [],
    explainMoreText: null,
    id: 5,
    sort: 5,
    group: 'situational questions'
  },

  {
    question: 'Did you lose your job due to the virus?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 6,
    sort: 6,
    group: 'situational questions'
  },

  {
    question: 'Did you lose someone due to the virus?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 9,
    sort: 9,
    group: 'personal questions'
  },

  {
    question: 'Have you been diagnosed with the virus?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 10,
    sort: 10,
    group: 'personal questions'
  },

  {
    question: 'Do you know anyone (or more than one person) diagnosed with the virus?',
    answerType: 'multiple',
    answerChoices: ['yes', 'no', 'multiple'],
    explainMoreText: 'Specify number',
    id: 11,
    sort: 11,
    group: 'personal questions'
  },

  {
    question: 'Has anyone (or more than one person) in your household been diagnosed with the virus?',
    answerType: 'multiple',
    answerChoices: ['yes', 'no', 'multiple'],
    explainMoreText: 'Specify number',
    id: 12,
    sort: 12,
    group: 'personal questions'
  },

  {
    question: 'How do you perceive your physical health?',
    answerType: 'multiple',
    answerChoices: ['worse than before', 'similar / unchanged', 'better than before'],
    explainMoreText: 'Explain',
    id: 13,
    sort: 13,
    group: 'personal questions'
  },

  {
    question: 'Have you experienced any flulike symptoms?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 14,
    sort: 14,
    group: 'personal questions'
  },

  {
    question: 'If so, do you have a stuffy nose?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 15,
    sort: 15,
    group: 'personal questions'
  },

  {
    question: 'How do you perceive your mental health?',
    answerType: 'multiple',
    answerChoices: ['worse than before', 'similar / unchanged', 'better than before'],
    explainMoreText: 'Explain',
    id: 16,
    sort: 16,
    group: 'personal questions'
  },

  {
    question: 'How do you feel about the level of conflict in your home?',
    answerType: 'multiple',
    answerChoices: ['worse than before', 'similar / unchanged', 'better than before'],
    explainMoreText: 'Explain',
    id: 17,
    sort: 17,
    group: 'personal questions'
  },

  {
    question: 'Do you feel unsafe in your home?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: 'Explain',
    id: 18,
    sort: 18,
    group: 'personal questions'
  },

  {
    question: 'Do you feel insecure about your future?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 19,
    sort: 19,
    group: 'personal questions'
  },

  {
    question: 'Do you feel tired?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 20,
    sort: 20,
    group: 'personal questions'
  },

  {
    question: 'Do you find it hard to be productive?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 21,
    sort: 21,
    group: 'personal questions'
  },

  {
    question: 'Do you feel like your relationships with people close to you have been negatively impacted?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 22,
    sort: 22,
    group: 'personal questions'
  },

  {
    question: 'Have you been outside in the past three days?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 23,
    sort: 23,
    group: 'personal questions'
  },

  {
    question: 'Have you experienced any shortage of (one or more) household goods?',
    answerType: 'multiple',
    answerChoices: ['yes, 1', 'yes, multiple', 'no'],
    explainMoreText: 'Specify good(s)',
    id: 24,
    sort: 24,
    group: 'situational questions'
  },

  {
    question: 'If you are a healthcare worker, have you experienced any shortage of Personal Protective Equipment?',
    answerType: 'multiple',
    answerChoices: ['yes', 'not applicable', 'no'],
    explainMoreText: 'Specify good(s)',
    id: 25,
    sort: 25,
    group: 'situational questions'
  },

  {
    question: 'Where do you live?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: 'Specify country (and state if applicable)',
    id: 26,
    sort: 26,
    group: 'demographic questions'
  },

  {
    question: 'Which gender do you identify as?',
    answerType: 'multiple',
    answerChoices: ['cisgender male', 'cisgender female', 'transgender male', 'transgender female', 'other'],
    explainMoreText: 'Specify other',
    id: 27,
    sort: 27,
    group: 'demographic questions'
  },

  {
    question: 'How old are you?',
    answerType: 'number',
    answerChoices: [],
    explainMoreText: null,
    id: 28,
    sort: 28,
    group: 'demographic questions'
  },

  {
    question: 'What is your profession?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: null,
    id: 29,
    sort: 29,
    group: 'demographic questions'
  },

  {
    question: 'Are you a healthcare worker?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 30,
    sort: 30,
    group: 'demographic questions'
  },

  {
    question: 'Are you a warehouse worker?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 31,
    sort: 31,
    group: 'demographic questions'
  },

  {
    question: 'Are you a grocery store worker?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 32,
    sort: 32,
    group: 'demographic questions'
  },

  {
    question: 'Are you a different kind of worker but considered essential?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: 'Specify profession',
    id: 33,
    sort: 33,
    group: 'demographic questions'
  },

  {
    question: 'What is your religion?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: null,
    id: 34,
    sort: 34,
    group: 'demographic questions'
  },

  {
    question: 'What is your socioeconomic status?',
    answerType: 'multiple',
    answerChoices: ['upper', 'upper-middle', 'middle', 'working', 'lower'],
    explainMoreText: 'Explain',
    id: 35,
    sort: 35,
    group: 'demographic questions'
  },

  {
    question: 'How many children do you have?',
    answerType: 'number',
    answerChoices: [],
    explainMoreText: null,
    id: 36,
    sort: 36,
    group: 'demographic questions'
  },

  {
    question: 'Have you attended any large gatherings (20+ people) in the past month?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 37,
    sort: 37,
    group: 'demographic questions'
  },

  {
    question: 'Is there any other way the crisis affected you, which was not covered by the questionnaire?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: null,
    id: 38,
    sort: 38,
    group: 'open questions'
  }
];

export const newQuestions = [
  {
    question: 'How are you coping with the crisis?',
    answerType: 'single',
    answerChoices: ['Very Bad', 'Mostly Bad', 'Neither good nor bad', 'Mostly Well', 'Very Well'],
    explainMoreText: null,
    id: 1,
    sort: 1,
    group: 'current-situation'
  },
  {
    question: 'What is your current situation (due to the crisis)?',
    answerType: 'multiple',
    answerChoices: [
      'Quarantine due to infection',
      'Quarantine due to law',
      'Voluntary quarantine',
      'Reduced social interactions',
      'No change to previous situation'
    ],
    explainMoreText: null,
    id: 2,
    sort: 2,
    group: 'current-situation'
  },
  {
    question: 'Are you currently working?',
    answerType: 'multiple',
    answerChoices: [
      'yes, outside from home',
      'Yes, from home',
      'No, on paid leave',
      'No, on unpaid leave',
      'No, unemployed',
      'No, unemployed due to the virus'
    ],
    explainMoreText: null,
    id: 3,
    sort: 3,
    group: 'current-situation'
  },
  {
    question: 'Do you perceive changes in your physical health due to the crisis?',
    answerType: 'single',
    answerChoices: [
      'My physical health is worse than before',
      'My physical health has not changed much during the crisis',
      'My physical health is better than before'
    ],
    explainMoreText: null,
    id: 4,
    sort: 4,
    group: 'health-situation'
  },
  {
    question: 'Do you perceive changes in your mental health due to the crisis?',
    answerType: 'single',
    answerChoices: [
      'My mental health is worse than before',
      'My mental health has not changed much during the crisis',
      'My mental health is better than before'
    ],
    explainMoreText: null,
    id: 5,
    sort: 5,
    group: 'health-situation'
  },
  {
    question: 'Do you know anybody diagnosed with the virus?',
    answerType: 'multiple',
    answerChoices: [
      'No',
      'Yes, I have been diagnosed with the virus',
      'Yes, someone I know has been diagnosed with the virus',
      'Yes, I lost someone due to the virus'
    ],
    explainMoreText: null,
    id: 6,
    sort: 6,
    group: 'health-situation'
  },
  {
    question: 'Have you been outside during the past three days?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 7,
    sort: 7,
    group: 'Current activities'
  },
  {
    question:
      'Outside of your work, do you take measures to connect to other people (e.g. friends or family) who do not live in the same household with you?',
    answerType: 'multiple',
    answerChoices: ['Yes, every day', 'Yes, once per week', 'Yes, once a few weeks', 'No'],
    explainMoreText: null,
    id: 8,
    sort: 8,
    group: 'Current activities'
  },
  {
    question: 'Has this changed since before the crisis?',
    answerType: 'multiple',
    answerChoices: [
      'Yes, I connect with other people more often',
      'yes, I connect with other people less often',
      'No, I connect with other people as often as I used to'
    ],
    explainMoreText: null,
    id: 8001,
    sort: 8.1,
    group: 'Current activities'
  },
  {
    question: 'Do you feel safe in your home?',
    answerType: 'multiple',
    answerChoices: ['All the time', 'Often', 'Sometimes', 'Rarely', 'Never'],
    explainMoreText: null,
    id: 9,
    sort: 9,
    group: 'How do you feel?'
  },
  {
    question: 'Has this changed since before the crisis?',
    answerType: 'multiple',
    answerChoices: [
      'Yes, I feel less safe than before',
      'No, I feel as safe or unsafe as before',
      'Yes, I feel more safe than before'
    ],
    explainMoreText: null,
    id: 9001,
    sort: 9.1,
    group: 'How do you feel?'
  },
  {
    question: 'How would you describe the level of conflict in your home?',
    answerType: 'multiple',
    answerChoices: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
    explainMoreText: null,
    id: 10,
    sort: 10,
    group: 'How do you feel?'
  },
  {
    question: 'Has this changed since before the crisis?',
    answerType: 'multiple',
    answerChoices: [
      'Yes, the conflict level has increased',
      'No, the conflict level has not changed',
      'Yes, the conflict level has decreased'
    ],
    explainMoreText: null,
    id: 10001,
    sort: 10.1,
    group: 'How do you feel?'
  },
  {
    question: 'Do you feel insecure about your future?',
    answerType: 'multiple',
    answerChoices: ['Never', 'Rarely', 'Sometimes', 'Often', 'All the time'],
    explainMoreText: null,
    id: 11,
    sort: 11,
    group: 'How do you feel?'
  },
  {
    question: 'Has this changed since before the crisis?',
    answerType: 'multiple',
    answerChoices: [
      'Yes, I feel more insecure',
      'No, I feel as secure or insecure as before',
      'Yes, I feel less insecure'
    ],
    explainMoreText: null,
    id: 11001,
    sort: 11.1,
    group: 'How do you feel?'
  },
  {
    question: 'Do you feel energetic?',
    answerType: 'multiple',
    answerChoices: ['All the time', 'Often', 'Sometimes', 'Rarely', 'Never'],
    explainMoreText: null,
    id: 12,
    sort: 12,
    group: 'How do you feel?'
  },
  {
    question: 'Has this changed since before the crisis?',
    answerType: 'multiple',
    answerChoices: [
      'Yes, I feel energetic more often',
      'No, I feel energetic as often as before',
      'Yes, I feel energetic less often'
    ],
    explainMoreText: null,
    id: 12001,
    sort: 12.1,
    group: 'How do you feel?'
  },
  {
    question: 'Which continent are you from?',
    answerType: 'single',
    answerChoices: ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia'],
    explainMoreText: null,
    id: 13,
    sort: 13,
    group: 'personal-questions'
  },
  {
    question: 'Which gender do you identify as?',
    answerType: 'single',
    answerChoices: ['Male', 'Female', 'Non-binary'],
    explainMoreText: null,
    id: 14,
    sort: 14,
    group: 'personal-questions'
  },
  {
    question: 'How old are you?',
    answerType: 'single',
    answerChoices: ['< 20', '20 - 29', '30 - 39', '40 - 49', '50 - 59', '60 - 69', '> 69'],
    explainMoreText: null,
    id: 15,
    sort: 15,
    group: 'personal-questions'
  }
];

export const answersAgs = {
  '1': {
    'Mostly Well': 3,
    'Neither good nor bad': 1,
    'Very Well': 2
  },
  '2': {
    'Quarantine due to law': 1,
    'Reduced social interactions': 3,
    'Voluntary quarantine': 1
  },
  '3': {
    'No, on paid leave': 1,
    'Yes, from home': 4
  },
  '4': {
    'My physical health has not changed much during the crisis': 4,
    'My physical health is better than before': 1
  },
  '5': {
    'My mental health has not changed much during the crisis': 2,
    'My mental health is better than before': 1,
    'My mental health is worse than before': 2
  },
  '6': {
    No: 4,
    'Yes, I have been diagnosed with the virus': 1
  },
  '7': {
    No: 2,
    Yes: 3
  },
  '8': {
    'Yes, every day': 2,
    'Yes, once a few weeks': 1,
    'Yes, once per week': 2
  },
  '9': {
    'All the time': 3,
    Often: 1,
    Sometimes: 1
  },
  '10': {
    Low: 3,
    Moderate: 1,
    'Very low': 1
  },
  '11': {
    Often: 1,
    Rarely: 1,
    Sometimes: 3
  },
  '12': {
    Sometimes: 5
  },
  '13': {
    Europe: 3,
    'North America': 2
  },
  '14': {
    Female: 3,
    Male: 2
  },
  '15': {
    '20 - 29': 2,
    '30 - 39': 1,
    '40 - 49': 1,
    '< 20': 1
  },
  '8001': {
    'No, I connect with other people as often as I used to': 2,
    'yes, I connect with other people less often': 3
  },
  '9001': {
    'No, I feel as safe or unsafe as before': 5
  },
  '10001': {
    'No, the conflict level has not changed': 3,
    'Yes, the conflict level has decreased': 1,
    'Yes, the conflict level has increased': 1
  },
  '11001': {
    'No, I feel as secure or insecure as before': 1,
    'Yes, I feel more insecure': 4
  },
  '12001': {
    'No, I feel energetic as often as before': 2,
    'Yes, I feel energetic less often': 2,
    'Yes, I feel energetic more often': 1
  }
};
