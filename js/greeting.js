import getRulesElement from './rules';
import renderScreen from './renderScreen';
import getElementFromTemplate from './getElementFromTemplate';
import {rulesData} from './game-data';

export default (data) => {
  const content = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

  const greetingElement = getElementFromTemplate(content);

  const continueButton = greetingElement.querySelector('.greeting__continue');

  continueButton.onclick = (e) => {
    e.preventDefault();
    renderScreen(getRulesElement(rulesData));
  };

  return greetingElement;
};
