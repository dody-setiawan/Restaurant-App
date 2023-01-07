import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';
import './components/restaurant-list';
import heroImage from '../public/images/hero-image.jpg';
import logoImage from '../public/images/logo.svg';

document.addEventListener('DOMContentLoaded', () => {
  const faviconElement = document.createElement('link');
  faviconElement.setAttribute('rel', 'icon');
  faviconElement.setAttribute('href', logoImage);
  document.querySelector('head').appendChild(faviconElement);

  const skipLinkElement = document.getElementById('skip-link')
  const skipElement = document.getElementById('skip-to-content');
  skipLinkElement.addEventListener('focus', () => {
    skipElement.style.opacity = 1;
    skipElement.style.zIndex = 3;
  });
  skipLinkElement.addEventListener('blur', () => {
    skipElement.style.opacity = 0;
    skipElement.style.zIndex = 1;
  });

  const navigatorLeftElement = document.getElementById('nav-left');
  const logoImageElement = document.createElement('img');
  logoImageElement.setAttribute('src', logoImage);
  logoImageElement.setAttribute('alt', 'Picture of the Indonesian archipelago, fork and spoon');
  logoImageElement.setAttribute('id', 'logo');
  logoImageElement.setAttribute('tabindex', 0);
  navigatorLeftElement.insertBefore(logoImageElement, navigatorLeftElement.children[0]);

  const drawerElement = document.querySelector('#drawer');
  const touchElements = document.querySelectorAll('.touch');
  document.querySelector('#hamburger').addEventListener('click', (event) => {
    drawerElement.classList.add('show');
    event.stopPropagation();
  });
  touchElements.forEach((touchElement) => {
    touchElement.addEventListener('click', (event) => {
      drawerElement.removeAttribute('class');
      event.stopPropagation();
    });
  });

  const heroElement = document.getElementById('hero');
  heroElement.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImage}')`;

  const restaurantsData = data.restaurants;
  document.querySelector('restaurant-list').restaurants = restaurantsData;
});
