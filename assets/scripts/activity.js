import Gallery from './modules/activity/_gallery';
import AddtoCart from './modules/global/_addToCart';
import {ActivityMap} from './modules/activity/_map';

new AddtoCart(['.float_button', '.activity__content__actions__add']);
new ActivityMap();
new Gallery('.gallery');