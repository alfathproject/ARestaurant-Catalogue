import CONFIG from '../../../globals/config';

const pageShowRestaurants = (restaurant) => `
    <div class="card">
        <p tabindex="0">Kota ${restaurant.city}</p>
        <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name} photo">
        <div class="description">
          <p tabindex="0"><i class="bi bi-star-fill"></i>  Rating ${restaurant.rating}</p>
          <h2 tabindex="0">${restaurant.name}</h2>
          <p tabindex="0">${restaurant.description}</p>
          <a href="#/detail/${restaurant.id}" tabindex="0" >Lihat Resto</a>
        </div>
    </div>
`;

const pageShowRestaurant = (restaurant) => `
    <h1 tabindex="0" class="restaurant_name">${restaurant.name}</h1>
    <div id="detailRestaurant">
      <div class="restaurant_title">
        <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="" width="100%">
      </div>
      <div class="restaurant_desc">
        <p tabindex="0" id="address">Alamat : ${restaurant.address}</p>
        <p tabindex="0" id="city">Kota : ${restaurant.city}</p>
        <p tabindex="0" class="desc">${restaurant.description}</p>
      </div>
    </div>
    <div id="detail_info">
      <div class="restaurant_menus">
        <p tabindex="0" id="menu_food_title">Menu Makanan</p>
        <ul id="foods_menus"></ul>
        <p tabindex="0" id="menu_drink_title">Menu Minuman</p>
        <ul id="drinks_menus"></ul>
        <div class="customer_reviews"></div>
      </div>
      <div class="customer_reviews">
        <p tabindex="0"><i class="bi bi-star-fill"></i>  Rating ${restaurant.rating}</p>
        <p tabindex="0" id="review_title">Ulasan Pelanggan</p>
        <div id="reviews"></div>
        <div id="btn-review">
          <button tabindex="0" id="showMore">Tampilkan Semua Ulasan</button>
        </div>
      </div>
    </div>
`;

const showMenu = (menu) => `
    <li tabindex="0" >${menu}</li>
`;

const showReviews = (review) => `
  <div class="review">
    <p tabindex="0" >Date : ${review.date}</p>
    <p tabindex="0" >Nama : ${review.name}</p>
    <p tabindex="0" >Review : ${review.review}</p>
  </div>
`;

const likeButton = () => `
  <button aria-label="unlike this restaurant" id="btn-like">
    <i tabindex="0" class="bi bi-heart"></i>
  </button>
`;

const likedButton = () => `
  <button aria-label="like this restaurant" id="btn-like">
    <i tabindex="0" class="bi bi-heart-fill"></i>
  </button>
`;

export {
  pageShowRestaurants,
  pageShowRestaurant,
  showMenu,
  showReviews,
  likeButton,
  likedButton,
};
