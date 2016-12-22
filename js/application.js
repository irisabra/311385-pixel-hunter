import getIntroView from './views/intro';
import getGreetingView from './views/greeting';
import getRulesView from './views/rules';
import getGameView from './game-presenter';
import StatsView from './views/stats';
import getErrorView from './views/error';

const main = document.getElementById('main');

const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

let questionsData;

export default class Application {
  static set data(data) {
    questionsData = data;
  }

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
    changeView(getGameView(questionsData));
  }
  static showStats(state, onRestart) {
    changeView(new StatsView(state, onRestart).element);
  }
  static showError() {
    changeView(getErrorView());
  }
}
