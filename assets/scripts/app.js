import 'lazysizes/plugins/unveilhooks/ls.unveilhooks.min';
import SmoothScroll from 'smooth-scroll';
import NavBar from "./modules/global/_navBar";
import CartBar from './modules/global/_cartBar';
import Cookies from './modules/global/_cookies';

require('../styles/kraken.scss');
require('../styles/styles.scss');

new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
new NavBar();
new CartBar();
new Cookies();


