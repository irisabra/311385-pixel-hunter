import {timerData, livesData} from './game-data';

const headerTemplate = (timer, lives) =>`<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
  <h1 class="game__timer">${timer}</h1>
  <div class="game__lives">
    ${lives.map((item) =>`<img src="img/heart__${item}.svg" class="game__heart" alt="Life" width="32" height="32">`).join('')}
  </div>
</header>`;

export default headerTemplate(timerData, livesData);
