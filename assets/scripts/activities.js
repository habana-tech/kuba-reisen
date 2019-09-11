import FilterActivities from './modules/activities/_filters';
import LoadActivities from './modules/activities/_more_activities';
import AddtoCart from './modules/global/_addToCart';
import ActivityDescription from './modules/activities/_activity_description';
import StoriesLayout from './modules/activities/_storiesLayout';

new FilterActivities();
new LoadActivities();
new AddtoCart('.activity__content__actions__add');
new ActivityDescription();
new StoriesLayout();