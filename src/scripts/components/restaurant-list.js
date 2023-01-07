import './restaurant-item';
import styleRestaurantList from '../../styles/style-list.scss';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurants(restaurants) {
    this.showRestaurants(restaurants);
  }

  showRestaurants(restaurants) {
    this.shadowDOM.innerHTML = '';
    const styleList = document.createElement('style');
    styleList.appendChild(document.createTextNode(styleRestaurantList));
    this.shadowDOM.appendChild(styleList);
    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;
      this.shadowDOM.appendChild(restaurantElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
