export default class AbstractView {
  get element() {
    if (!this._element) {
      this._element = document.createElement('div');
      this._element.innerHTML = this.getMarkup();
      this.bindHandlers();
    }
    return this._element;
  }
  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }
  bindHandlers() {}
  clearHandlers() {}
}
