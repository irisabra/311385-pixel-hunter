export const timerData = 'NN';
export const livesData = ['empty', 'full', 'full'];

export const gameOneData = {
  task: 'Угадайте для каждого изображения фото или рисунок?',
  questions: [
    {
      image: 'http://placehold.it/468x458',
      description: 'Option 1',
      answers: [
        {
          text: 'Фото',
          value: 'photo'
        },
        {
          text: 'Рисунок',
          value: 'paint'
        }
      ]
    },
    {
      image: 'http://placehold.it/468x458',
      description: 'Option 2',
      answers: [
        {
          text: 'Фото',
          value: 'photo'
        },
        {
          text: 'Рисунок',
          value: 'paint'
        }
      ]
    }
  ],
  stats: [
    'wrong',
    'slow',
    'fast',
    'correct',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
  ]
};

export const gameTwoData = {
  task: 'Угадай, фото или рисунок?',
  questions: [
    {
      image: 'http://placehold.it/705x455',
      description: 'Option 1',
      answers: [
        {
          text: 'Фото',
          value: 'photo'
        },
        {
          text: 'Рисунок',
          value: 'paint'
        }
      ]
    }
  ],
  stats: [
    'wrong',
    'slow',
    'fast',
    'correct',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
  ]
};

export const gameThreeData = {
  task: 'Найдите рисунок среди изображений',
  answers: [
    {
      image: 'http://placehold.it/468x458',
      description: 'Option 1'
    },
    {
      image: 'http://placehold.it/468x458',
      description: 'Option 2'
    },
    {
      image: 'http://placehold.it/468x458',
      description: 'Option 3'
    }
  ],
  stats: [
    'wrong',
    'slow',
    'fast',
    'correct',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
  ]
};

export const statsData = {
  status: 'Победа!',
  gameResults: [
    {
      title: '1.',
      statsDetails: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      points: '×&nbsp;100',
      total: 900,
      totalWithExtra: 950,
      extras: [
        {
          title: 'Бонус за скорость:',
          type: 'fast',
          amount: 1,
          points: 50,
          total: 50
        },
        {
          title: 'Бонус за жизни:',
          type: 'heart',
          amount: 2,
          points: 50,
          total: 100
        },
        {
          title: 'Штраф за медлительность:',
          type: 'slow',
          amount: 2,
          points: 50,
          total: -100
        }
      ]
    },
    {
      title: '2.',
      statsDetails: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      points: '',
      total: '',
      totalWithExtra: 'fail',
      extras: []
    },
    {
      title: '3.',
      points: '×&nbsp;100',
      statsDetails: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      total: 900,
      totalWithExtra: 950,
      extras: [
        {
          title: 'Бонус за жизни:',
          type: 'heart',
          amount: 2,
          points: 50,
          total: 100
        }
      ]
    }
  ]
};
