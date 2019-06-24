import axios from 'axios';
import MakeActivity from "./_make_activity";
import AddtoCart from "../global/_addToCart";

class FilterStyle {
    constructor(){
        this.url = '/activitiesApiPosFilter';

        this.activitiesTextCount = document.querySelector('.activities__list__title span');

        this.activitiesList = document.querySelector('.activities__list__container');
        this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
        this.activitiesListFilterSearch = document.querySelector('.activities__list__container__filter_search');

        this.prototype = document.querySelector('.activities__list__item-prototype div');
        this.filters = document.querySelectorAll('.activities__selectors__filters__lists li');

        this.events();
    }

    events(){
        this.filters.forEach((x)=>{x.addEventListener('click', this.selectAndGetData.bind(this) )});

        this.activitiesListFilterSearch.addEventListener('DOMNodeInserted', ()=>{
            this.activitiesTextCount.innerHTML = container.querySelectorAll('.activity').length;
        });
    }

    selectAndGetData(e){
        e.preventDefault();
        let element = e.target;
        element.classList.toggle('selected');
        this.getData();
    }


    getData(){
        let filters = document.querySelectorAll('.activities__selectors__filters__lists li.selected');
        let filtersText = '';

        if (filters.length > 0) {
            for (let i = 0; i < filters.length - 1; i++)
                filtersText += filters[i].innerText + ',';
            filtersText += filters[filters.length - 1].innerText;

            console.log(filtersText);

            let url = this.url + '/' + filtersText;
            let that = this;
            axios.get(url)
                .then(function (response) {
                    let activities = response.data.activities;
                    let loadMore = response.data.loadMore;
                    console.log(loadMore);
                    if (activities.length > 0) {
                        that.activitiesListFilterSearch.querySelectorAll('.activity').forEach((x) => {
                            x.parentNode.removeChild(x);
                        });

                        activities.forEach(function (activity) {
                            let newActivity = new MakeActivity(that.prototype).make(activity.id, activity.image, activity.imageAlt,
                                activity.name, activity.description, activity.link);

                            that.activitiesListFilterSearch.appendChild(newActivity);
                        });

                        new AddtoCart('.activity__content__actions__add a');
                    }
                    else {
                        console.log('error');
                    }

                    that.activitiesListFilterSearch.classList.remove('activities__list__container__filter_search--hide');
                    that.activitiesListInitial.classList.add('activities__list__container__initial--hide');
                    that.activitiesList.classList.toggle('activities__list__container--loading');
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.activitiesList.classList.toggle('activities__list__container--loading');

        }
        else{
            this.activitiesListFilterSearch.classList.add('activities__list__container__filter_search--hide');
            this.activitiesListInitial.classList.remove('activities__list__container__initial--hide');
        }
    }
}

export default FilterStyle;