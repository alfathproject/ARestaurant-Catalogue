import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/swRegister';

const app = new App({
  buttonOpen: document.getElementById('btn-openNav'),
  sidenav: document.getElementById('sideNav'),
  buttonClose: document.getElementById('btn-closeNav'),
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  document.getElementById('sideNav').classList.remove('open');
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
