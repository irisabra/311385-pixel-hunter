import Application from '../application';
import AbstractView from '../view';

class IntroView extends AbstractView {

  getMarkup() {
    return `<div class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
    </div>`;
  }
  bindHandlers() {
    const asterisk = this.element.querySelector('.intro__asterisk');
    asterisk.onclick = (e) => {
      e.preventDefault();
      Application.showGreeting();
    };
  }
}

export default () => new IntroView().element;
