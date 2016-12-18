import AbstractView from '../view';
import Application from '../application';
import HeaderView from './header';


class RulesView extends AbstractView {
  constructor() {
    super();
    this.header = new HeaderView();
    this.header.onBack = () => Application.showIntro();
    this.element.insertBefore(this.header.element, this.element.firstChild);
  }
  getMarkup() {
    const content = `<div class="rules  central--none">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?</p>
    <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
    </div>`;

    return content;
  }

  bindHandlers() {
    const rulesInput = this.element.querySelector('.rules__input');
    const rulesSubmit = this.element.querySelector('.rules__button');

    rulesInput.oninput = () => {
      if (rulesInput.value) {
        rulesSubmit.removeAttribute('disabled');
      } else {
        rulesSubmit.setAttribute('disabled', '');
      }
    };

    rulesSubmit.onclick = (e) => {
      e.preventDefault();
      Application.showGame();
    };
  }

}

export default () => new RulesView().element;
