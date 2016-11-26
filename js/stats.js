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


// <table class="result__table">
//   <tr>
//     <td class="result__number">2.</td>
//     <td>
//       <ul class="stats">
//         <li class="stats__result stats__result--wrong"></li>
//         <li class="stats__result stats__result--slow"></li>
//         <li class="stats__result stats__result--fast"></li>
//         <li class="stats__result stats__result--correct"></li>
//         <li class="stats__result stats__result--wrong"></li>
//         <li class="stats__result stats__result--unknown"></li>
//         <li class="stats__result stats__result--slow"></li>
//         <li class="stats__result stats__result--wrong"></li>
//         <li class="stats__result stats__result--fast"></li>
//         <li class="stats__result stats__result--wrong"></li>
//       </ul>
//     </td>
//     <td class="result__total"></td>
//     <td class="result__total  result__total--final">fail</td>
//   </tr>
// </table>
// <table class="result__table">
//   <tr>
//     <td class="result__number">3.</td>
//     <td colspan="2">
//       <ul class="stats">
//         <li class="stats__result stats__result--wrong"></li>
//         <li class="stats__result stats__result--slow"></li>
//         <li class="stats__result stats__result--fast"></li>
//         <li class="stats__result stats__result--correct"></li>
//         <li class="stats__result stats__result--wrong"></li>
//         <li class="stats__result stats__result--unknown"></li>
//         <li class="stats__result stats__result--slow"></li>
//         <li class="stats__result stats__result--unknown"></li>
//         <li class="stats__result stats__result--fast"></li>
//         <li class="stats__result stats__result--unknown"></li>
//       </ul>
//     </td>
//     <td class="result__points">×&nbsp;100</td>
//     <td class="result__total">900</td>
//   </tr>
//   <tr>
//     <td></td>
//     <td class="result__extra">Бонус за жизни:</td>
//     <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
//     <td class="result__points">×&nbsp;50</td>
//     <td class="result__total">100</td>
//   </tr>
//   <tr>
//     <td colspan="5" class="result__total  result__total--final">950</td>
//   </tr>
// </table>
