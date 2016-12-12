import AbstractView from '../view';
import HeaderBackView from './header-back';

export default class GameHeaderView extends AbstractView {
  constructor(gameState) {
    super();
    this.state = gameState;
  }
  getMarkup() {
    return `${new HeaderBackView().getMarkup()}
    <h1 class="game__timer">${this.state.time}</h1>
    <div class="game__lives">
    ${Array.from(new Array(3), (item, index) =>`<img src="img/heart__${(index < this.state.lives ? 'full' : 'empty')}.svg"
    class="game__heart" alt="Life" width="32" height="32">`).reverse().join('')}
    </div>`;
  }
  update(state) {
    this.state = state;
    this.element.innerHTML = this.getMarkup();
  }
}
