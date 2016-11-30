import {timerData, livesData} from './game-data';
import {headerBack} from './header-back';


const headerTemplate = `<header class="header">
  ${headerBack}
  <h1 class="game__timer">${timerData}</h1>
  <div class="game__lives">
    ${livesData.map((item) =>`<img src="img/heart__${item}.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
  </div>
</header>`;

export default headerTemplate;
