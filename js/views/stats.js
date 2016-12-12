import AbstractView from '../view';
import HeaderBackView from './header-back';
import {gameResultTitle, extraTitle} from '../data/stats-utils';

export default class StatsView extends AbstractView {
  constructor(statsData) {
    super();
    this.stats = statsData;
    this.header = new HeaderBackView();
  }
  getMarkup() {
    const content = `<div class="result">
      <h1>${gameResultTitle.get(this.stats.status)}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              <ul class="stats">
                ${this.stats.answers.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
              </ul>
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${this.stats.total}</td>
          </tr>
          ${this.stats.extras.map((extra) => `
            <tr>
              <td></td>
              <td class="result__extra">${extraTitle.get(extra.type)}</td>
              <td class="result__extra">${extra.amount}&nbsp;<span class='stats__result stats__result--${extra.type}'></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${extra.total}</td>
            </tr>`).join('')}
          <tr>
            <td colspan="5" class="result__total  result__total--final">${this.stats.totalWithExtra}</td>
          </tr>
        </table>
    </div>`;
    let article = `<header class="header">${this.header.getMarkup()}</header> ${content}`;

    return article;
  }
}
