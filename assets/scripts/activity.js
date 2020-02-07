import '../styles/activity.scss';

import Gallery from './modules/activity/_gallery';
import {ActivityMap} from './modules/activity/_map';
import Days from "./modules/activity/_days";

new ActivityMap();
new Gallery('.gallery');
new Days();