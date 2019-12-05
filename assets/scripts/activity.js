import Gallery from './modules/activity/_gallery';
import AddtoCart from './modules/global/_addToCart';
import {ActivityMap} from './modules/activity/_map';
require('../styles/activity.scss');

new AddtoCart('.float_button');
new ActivityMap();
new Gallery('.gallery');