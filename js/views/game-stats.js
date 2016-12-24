import AbstractView from '../view';

export default class GameStatsView extends AbstractView {
  constructor(statsData) {
    super();
    this._stats = statsData;
  }
  getMarkup() {
    return `<div class="stats">
        <ul class="stats">
          ${this._stats.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
        </ul>
      </div>`;
  }
}
