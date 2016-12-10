export const AnswerType = {
  UNKNOWN: 'unknown',
  WRONG: 'wrong',
  SLOW: 'slow',
  FAST: 'fast',
  CORRECT: 'correct'
};

export const questionsData = [
  {
    type: 'game-1',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    images: [
      {
        path: 'http://placehold.it/468x458',
        description: 'Option 1',
        width: 468,
        height: 458,
        mediaType: 'photo'
      },
      {
        path: 'http://placehold.it/468x458',
        description: 'Option 2',
        width: 468,
        height: 458,
        mediaType: 'paint'
      }
    ],
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
    type: 'game-2',
    task: 'Угадай, фото или рисунок?',
    images: [
      {
        path: 'http://placehold.it/705x455',
        description: 'Option 1',
        width: 705,
        height: 455,
        mediaType: 'photo'
      }
    ],
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
    type: 'game-3',
    task: 'Найдите рисунок среди изображений',
    mediaType: 'paint',
    images: [
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 1',
        mediaType: 'photo'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 2',
        mediaType: 'photo'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 3',
        mediaType: 'image'
      }
    ],
    answers: []
  },
  {
    type: 'game-1',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    images: [
      {
        path: 'http://placehold.it/468x458',
        description: 'Option 1',
        width: 468,
        height: 458,
        mediaType: 'photo'
      },
      {
        path: 'http://placehold.it/468x458',
        description: 'Option 2',
        width: 468,
        height: 458,
        mediaType: 'photo'
      }
    ],
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
    type: 'game-2',
    task: 'Угадай, фото или рисунок?',
    images: [
      {
        path: 'http://placehold.it/705x455',
        description: 'Option 1',
        width: 705,
        height: 455,
        mediaType: 'paint'
      }
    ],
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
    type: 'game-3',
    task: 'Найдите фото среди изображений',
    mediaType: 'photo',
    images: [
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 1',
        mediaType: 'photo'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 2',
        mediaType: 'paint'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 3',
        mediaType: 'paint'
      }
    ],
    answers: []
  },
  {
    type: 'game-1',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    images: [
      {
        path: 'http://placehold.it/468x458',
        description: 'Option 1',
        width: 468,
        height: 458,
        mediaType: 'paint'
      },
      {
        path: 'http://placehold.it/468x458',
        description: 'Option 2',
        width: 468,
        height: 458,
        mediaType: 'paint'
      }
    ],
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
    type: 'game-3',
    task: 'Найдите рисунок среди изображений',
    mediaType: 'paint',
    images: [
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 1',
        mediaType: 'photo'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 2',
        mediaType: 'paint'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 3',
        mediaType: 'photo'
      }
    ],
    answers: []
  },
  {
    type: 'game-2',
    task: 'Угадай, фото или рисунок?',
    images: [
      {
        path: 'http://placehold.it/705x455',
        description: 'Option 1',
        width: 705,
        height: 455,
        mediaType: 'paint'
      }
    ],
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
    type: 'game-3',
    task: 'Найдите рисунок среди изображений',
    mediaType: 'paint',
    images: [
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 1',
        mediaType: 'photo'

      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 2',
        mediaType: 'paint'
      },
      {
        path: 'http://placehold.it/304x455',
        width: 304,
        height: 455,
        description: 'Option 3',
        mediaType: 'photo'
      }
    ],
    answers: []
  }
];
