import sidenavInitiator from '../utils/sidenav-initiator';
import UrlParser from '../../routes/url-parser';
import routes from '../../routes/routes';

class App {
  constructor({
    buttonOpen, sidenav, buttonClose, content,
  }) {
    this.buttonOpen = buttonOpen;
    this.sidenav = sidenav;
    this.buttonClose = buttonClose;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    sidenavInitiator.init({
      buttonOpen: this.buttonOpen,
      sidenav: this.sidenav,
      buttonClose: this.buttonClose,
    });

    this.renderPage();
  }

  async renderPage() {
    const url = UrlParser.UrlActiveWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
