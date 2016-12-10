import getElementFromTemplate from './getElementFromTemplate';
import {headerBack} from './header-back';
import {gameResultTitle, extraTitle} from './data/stats-utils';

export default (result) => {
  const content = `<div class="result">
    <h1>${gameResultTitle.get(result.status)}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${result.answers.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${result.total}</td>
        </tr>
        ${result.extras.map((extra) => `
          <tr>
            <td></td>
            <td class="result__extra">${extraTitle.get(extra.type)}</td>
            <td class="result__extra">${extra.amount}&nbsp;<span class='stats__result stats__result--${extra.type}'></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${extra.total}</td>
          </tr>`).join('')}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${result.totalWithExtra}</td>
        </tr>
      </table>
  </div>`;

  const article = `<header class="header">${headerBack}</header> ${content}`;

  return getElementFromTemplate(article);
};
