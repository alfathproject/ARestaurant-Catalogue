import RestaurantSource from '../../data/restaurant-source';
import { pageShowRestaurants } from '../templates/page-template';

const Home = {
  async render() {
    return `
            <h1 tabindex="0" id="content-title">Explore Restaurant</h1>
            <div id="contentContainer"></div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homePage();
    const contentContainer = document.getElementById('contentContainer');
    restaurants.forEach((restaurant) => {
      contentContainer.innerHTML += pageShowRestaurants(restaurant);
    });
  },
};

export default Home;
