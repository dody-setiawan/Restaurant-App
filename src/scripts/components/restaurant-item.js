import styleRestaurantItem from "../../styles/style-item.scss";

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    this.showRestaurant(restaurant);
  }

  showRestaurant(restaurant) {
    this.shadowDOM.innerHTML = `
    <div class="restaurant-header">
      <div class="restaurant-city" tabindex="0">${restaurant.city}</div>
      <img class="restaurant-picture" tabindex="0" src="${restaurant.pictureId}" alt="Photo of the interior or front of ${restaurant.name}'s restaurant" />
      <p class="restaurant-rating" tabindex="0">Rating ${restaurant.rating}</p>
    </div>
    <div class="restaurant-content">
      <h3 class="restaurant-name" tabindex="0">${restaurant.name}</h3>
      <p class="restaurant-description" tabindex="0">${restaurant.description}</p>
    </div>
    `;
    const styleItem = document.createElement('style');
    styleItem.appendChild(document.createTextNode(styleRestaurantItem));
    this.shadowDOM.appendChild(styleItem);
  }
}

customElements.define('restaurant-item', RestaurantItem);
