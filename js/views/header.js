import AbstractView from '../view';

export default class HeaderView extends AbstractView {
  constructor(data) {
    super();
    this.state = data;
    this.showGameHeader = Boolean(data);
  }

  set onBack(handler) {
    this._onBack = handler;
  }

  getMarkup() {
    const headerBack = `<div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>`;

    const gameHeader = (state) => `<h1 class="game__timer">${state.time}</h1>
      <div class="game__lives">
        ${Array.from(new Array(3), (item, index) =>`<img src="img/heart__${(index < state.lives ? 'full' : 'empty')}.svg"
        class="game__heart" alt="Life" width="32" height="32">`).reverse().join('')}
      </div>`;

    return `<header class="header">
    ${headerBack}
    ${this.showGameHeader ? gameHeader(this.state) : ''}
    </header>`;
  }

  bindHandlers() {
    this.element.querySelector('.back').onclick = (e) => {
      e.preventDefault();
      this._onBack();
    };
  }

  update(state) {
    this.state = state;
    this.element.innerHTML = this.getMarkup();
    this.bindHandlers();
  }
}
