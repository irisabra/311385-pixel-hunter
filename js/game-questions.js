const questionsTemplate = (images, answers) => images.map((image, index) =>
  `<div class="game__option">
    <img src="${image.path}" alt="${image.description}" width="${image.width}" height="${image.height}">
    ${answers.map((answer) => `
    <label class="game__answer game__answer--${answer.value}">
      <input name="question${index}" type="radio" value="${answer.value}">
      <span>${answer.text}</span>
    </label>`).join('')}
  </div>`
).join('');

export default questionsTemplate;
