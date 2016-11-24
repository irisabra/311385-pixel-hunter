const renderScreen = (screen) => {

  const mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  mainElement.appendChild(screen);
};

export default renderScreen;
