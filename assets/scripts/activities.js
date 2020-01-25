import '../styles/activities.scss';

import FilterActivities from './modules/activities/_filters';
import LoadActivities from './modules/activities/_more_activities';
import AddToCart from './modules/global/_addToCart';
import StoryDescription from './modules/activities/_story_description';
import StoriesLayout from './modules/activities/_stories_layout';


new FilterActivities();
new LoadActivities();
new AddToCart('.activity__content__actions__add');
new StoriesLayout();
new StoryDescription();
