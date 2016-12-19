import Application from './application';
import {QuestionType, MediaType} from './data/game-utils';
import 'whatwg-fetch';

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions')
    .then(status)
    .then((response) => response.json())
    .then((data) => {
      const questionsData = [];
      for (const question of data) {
        const myQuestion = {
          type: question.type,
          task: question.question,
          images: question.answers.map((item) => Object.assign({}, item.image, {mediaType: item.type}))
        };
        if (question.type === QuestionType.ONE_OF_THREE) {
          const photos = question.answers.filter((item) => item.type === MediaType.PHOTO);
          myQuestion.mediaType = photos.length > 1 ? MediaType.PAINTING : MediaType.Photos;
        }
        questionsData.push(myQuestion);
      }
      Application.data = questionsData;
    })
    .then(Application.showIntro)
    .catch(Application.showError);
