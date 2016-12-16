import getIntroView from './views/intro';
import getGreetingView from './views/greeting';
import getRulesView from './views/rules';
import getGameView from './views/game';
import StatsView from './views/stats';

const main = document.getElementById('main');

const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

export default class Application {
  static showIntro() {
    changeView(getIntroView());
  }
  static showGreeting() {
    changeView(getGreetingView());
  }
  static showRules() {
    changeView(getRulesView());
  }
  static showGame() {
    changeView(getGameView());
  }
  static showStats(state, onRestart) {
    changeView(new StatsView(state, onRestart).element);
  }
}
