import AbstractView from '../view';

class ErrorView extends AbstractView {
  getMarkup() {
    return `<div class="error">
    <h1>Произошла ошибка при загрузке данных</h1>
    </div>`;
  }
}

export default () => new ErrorView().element;
