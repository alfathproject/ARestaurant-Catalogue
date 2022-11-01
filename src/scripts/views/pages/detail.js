import UrlParser from '../../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { pageShowRestaurant, showMenu, showReviews } from '../templates/page-template';
import LikeInitiator from '../../utils/like-initiator';

const Detail = {
  async render() {
    return `
            <div id="detailContainer"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.UrlActiveWithoutCombiner();
    const restaurant = await RestaurantSource.detailPage(url.id);

    // top content
    const detailContainer = document.getElementById('detailContainer');
    detailContainer.innerHTML = pageShowRestaurant(restaurant);

    // menus
    const foodsMenus = document.getElementById('foods_menus');
    const drinksMenus = document.getElementById('drinks_menus');
    const menusFoods = restaurant.menus.foods;
    menusFoods.forEach((menuFood) => {
      foodsMenus.innerHTML += showMenu(menuFood.name);
    });

    const menusDrinks = restaurant.menus.drinks;
    menusDrinks.forEach((menuDrink) => {
      drinksMenus.innerHTML += showMenu(menuDrink.name);
    });

    // customer Reviews
    const reviewsContainer = document.getElementById('reviews');
    const { customerReviews } = restaurant;
    for (let i = customerReviews.length; i > customerReviews.length - 3; i -= 1) {
      if (customerReviews[i] === undefined) {
        reviewsContainer.innerHTML += '';
      } else {
        reviewsContainer.innerHTML += showReviews(customerReviews[i]);
      }
    }
    const showMore = document.getElementById('showMore');
    showMore.addEventListener('click', (event) => {
      event.stopPropagation();
      showMore.classList.toggle('open');
      reviewsContainer.innerHTML = '';
      customerReviews.forEach((review) => {
        reviewsContainer.innerHTML += showReviews(review);
      });
    });

    // LIKE
    LikeInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
