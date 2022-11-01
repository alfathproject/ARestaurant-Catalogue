import FavoriteRestaurantIdb from '../data/favorite-restaurants';
import { likeButton, likedButton } from '../views/templates/page-template';

const LikeInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLike();
    } else {
      this.renderLiked();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = likeButton();

    const likeBtn = document.getElementById('btn-like');
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = likedButton();

    const likeBtn = document.getElementById('btn-like');
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeInitiator;
