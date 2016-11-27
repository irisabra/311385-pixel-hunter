import getElementFromTemplate from './getElementFromTemplate';
import {statsData} from './game-data';

const statsTemplate = (data) => `
  <div class="result">
    <h1>${data.status}</h1>
    ${data.gameResults.map((result) => `
      <table class="result__table">
        <tr>
          <td class="result__number">${result.title}</td>
          <td colspan="2">
            <ul class="stats">
              ${result.statsDetails.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
            </ul>
          </td>
          <td class="result__points">${result.points}</td>
          <td class="result__total">${result.total}</td>
        </tr>
        ${result.extras.map((extra) => `
          <tr>
            <td></td>
            <td class="result__extra">${extra.title}</td>
            <td class="result__extra">${extra.amount}&nbsp;<span class='stats__result stats__result--${extra.type}'></span></td>
            <td class="result__points">${extra.points}</td>
            <td class="result__total">${extra.total}</td>
          </tr>`).join('')}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${result.totalWithExtra}</td>
        </tr>
      </table>
      `).join('')}
  </div>`;

const headerTemplate = () =>`<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>`;

const statsElement = getElementFromTemplate(`${headerTemplate()} ${statsTemplate(statsData)}`);

export default statsElement;
