import axios from '../../vendors/axios.min';

class LoadActivities {
    constructor(){
        this.amount = 6;
        this.url = '/activitiesApiPos';

        this.activitiesList = document.querySelector('.activities__list__container');
        this.btnLoad = document.querySelector('.activities__list__more a');
        this.prototype = document.querySelector('.activities__list__item-prototype div');
        this.events();
    }

    events(){
        this.btnLoad.addEventListener('click', this.loadMore.bind(this));
    }

    makeActivity(image, imageAlt, name, description, link){
        let newActivity = this.prototype.cloneNode(true);

        newActivity.querySelector('img').setAttribute('src', image);
        newActivity.querySelector('img').setAttribute('alt', imageAlt);
        newActivity.querySelector('h4').innerHTML = name;
        newActivity.querySelector('p').innerHTML = description;
        newActivity.querySelectorAll('a').forEach(function (key) {
            key.setAttribute('href', link);
        });

        return newActivity;
    }

    getData(){
        let pos = this.activitiesList.querySelectorAll('.activity').length;

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
                        let newActivity = that.makeActivity(activity.image, activity.imageAlt,
                            activity.name, activity.description, activity.link);
                        that.activitiesList.appendChild(newActivity);
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