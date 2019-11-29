import axios from 'axios';
import MakeActivity from './_make_activity';

class LoadActivities {
    constructor(){
        this.amount = 6;
        this.url = '/activitiesApiPos';

        this.activitiesList = document.querySelector('.activities__list__container');
        this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
        this.btnLoad = document.querySelector('.activities__list__more button');
        this.prototype = document.querySelector('.activities__list__item-prototype div');
        this.events();
    }

    events(){
        if (this.btnLoad != null)
            this.btnLoad.addEventListener('click', this.loadMore.bind(this));
    }


    getData(){
        let pos = this.activitiesListInitial.querySelectorAll('.activity').length;

        let url = this.url+'/'+pos+'/'+this.amount;
        let that = this;
        axios.get(url)
            .then(function (response) {
                let activities = response.data.activities;
                let loadMore = response.data.loadMore;

                if (loadMore === false)
                    that.btnLoad.classList.add('hidden');

                if (activities.length > 0) {
                    activities.forEach(function (activity) {
                        let newActivity = new MakeActivity(that.prototype).make(activity.id, activity.image, activity.imageAlt,
                            activity.name, activity.description, activity.link, activity.price);

                        that.activitiesListInitial.appendChild(newActivity);
                    });
                }
                else {
                    console.log('error');
                }

                that.activitiesList.classList.toggle('activities__list__container--loading');
            })
            .catch(function (error) {
                console.log(error);
            });

        this.activitiesList.classList.toggle('activities__list__container--loading');
    }

    loadMore(e){
        e.preventDefault();
        this.getData();
        return false;
    }
}

export default LoadActivities;