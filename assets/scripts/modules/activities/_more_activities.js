import axios from 'axios';
import MakeActivity from './_make_activity';

class LoadActivities {
    constructor(){
        this.amount = 6;
        this.url = '/activitiesApiPos';

        this.activitiesList = document.querySelector('.activities__list__container');
        this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
        this.btnLoad = document.querySelector('.activities__list__more button');

        this.loadingDots = document.querySelector('.loading_dots:last-child');

        this.prototype = document.querySelector('.activities__list__item__prototype div');
        this.events();
    }

    events(){
        if (this.btnLoad != null)
            this.btnLoad.addEventListener('click', this.getData.bind(this));
    }


    getData(e){
        e.preventDefault();

        let pos = this.activitiesListInitial.querySelectorAll('.activity').length;

        let url = this.url+'/'+pos+'/'+this.amount;

        axios.get(url)
            .then((response, that = this) => {
                let activities = response.data.activities;
                let loadMore = response.data.loadMore;

                if (loadMore === false)
                    that.btnLoad.classList.add('hidden');

                if (activities.length > 0) {
                    activities.forEach((activity) => {
                        let newActivity = new MakeActivity(that.prototype).make(activity);

                        that.activitiesListInitial.appendChild(newActivity);
                    });
                }
                else {
                    console.error(' mostrar que no hay mas');
                }

                this.loadingDots.classList.toggle('loading_dots--visible');
                this.activitiesList.classList.toggle('activities__list__container--loading');

            })
            .catch((error) => {
                console.error("error at loading more activities");
            });

        this.activitiesList.classList.toggle('activities__list__container--loading');
        this.loadingDots.classList.toggle('loading_dots--visible');
    }

}

export default LoadActivities;