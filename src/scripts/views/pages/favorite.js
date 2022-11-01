import FavoriteRestaurantIdb from '../../data/favorite-restaurants';
import { pageShowRestaurants } from '../templates/page-template';

const Favorite = {
  async render() {
    return `
            <h1 tabindex="0" id="content-title">Your Favorite Restaurant</h1>
            <div id="contentContainer"></div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const contentContainer = document.getElementById('contentContainer');

    restaurants.forEach((restaurant) => {
      contentContainer.innerHTML += pageShowRestaurants(restaurant);
    });
  },
};

export default Favorite;
