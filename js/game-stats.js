const gameStatsTemplate = (data) => `<div class="stats">
    <ul class="stats">
      ${data.map((item)=>`<li class="stats__result stats__result--${item}"></li>`).join('')}
    </ul>
  </div>`;

export default gameStatsTemplate;
