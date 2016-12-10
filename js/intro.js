import renderScreen from './renderScreen';
import getGreetingElement from './greeting';
import getElementFromTemplate from './getElementFromTemplate';

export default () => {
  const content = `<div class="intro">
  <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
  </div>`;

  const introElement = getElementFromTemplate(content);
  const asterisk = introElement.querySelector('.intro__asterisk');

  asterisk.onclick = (e) => {
    e.preventDefault();
    renderScreen(getGreetingElement());
  };

  return introElement;
};
