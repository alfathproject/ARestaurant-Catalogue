import Home from '../scripts/views/pages/home';
import Detail from '../scripts/views/pages/detail';
import Favorite from '../scripts/views/pages/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
