
import getElementFromTemplate from './getElementFromTemplate';

const introElement = getElementFromTemplate(`<div class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
</div>`);

export default introElement;
