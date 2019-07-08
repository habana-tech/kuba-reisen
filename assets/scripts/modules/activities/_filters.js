import axios from 'axios';
import MakeActivity from "./_make_activity";
import AddtoCart from "../global/_addToCart";

class FilterActivities {
    constructor(){
        this.urlFilters = '/activitiesApiPosFilter';
        this.urlSearch = '/activitiesApiPosSearch';

        this.activitiesTextCount = document.querySelector('.activities__list__title span');

        this.activitiesList = document.querySelector('.activities__list__container');
        this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
        this.activitiesListFilterSearch = document.querySelector('.activities__list__container__filter_search');

        this.prototype = document.querySelector('.activities__list__item-prototype div');
        this.filters = document.querySelectorAll('.activities__selectors__filters__lists li');

        this.searchFormInput = document.querySelector('.activities__selectors__search form input[type="text"]');
        this.searchFormSubmit = document.querySelector('.activities__selectors__search form input[type="submit"]');

        this.events();
    }

    events(){
        this.filters.forEach((x)=>{x.addEventListener('click', this.selectAndGetData.bind(this) )});

        this.searchFormSubmit.addEventListener('click', this.searchAndGetData.bind(this));

        this.activitiesListFilterSearch.addEventListener('DOMNodeInserted', ()=>{
            this.activitiesTextCount.innerHTML = this.activitiesListFilterSearch.querySelectorAll('.activity').length;
        });
    }

    selectAndGetData(e){
        e.preventDefault();
        let element = e.target;
        element.classList.toggle('selected');
        let filters = document.querySelectorAll('.activities__selectors__filters__lists li.selected');
        let filtersText = '';
        if (filters.length > 0) {
            for (let i = 0; i < filters.length - 1; i++)
                filtersText += filters[i].innerText + ',';
            filtersText += filters[filters.length - 1].innerText;
            let url = this.urlFilters + '/' + filtersText;
            this.getData(url);
        }
        else
            this.showInitialContainer();
    }

    searchAndGetData(e){
        e.preventDefault();
        if (this.searchFormInput.value !== '') {
            let filtersText = this.searchFormInput.value;
                let url = this.urlSearch + '/' + filtersText;
                console.log(url);
                this.getData(url);
            }
        else
            this.showInitialContainer();
    }

    getData(url){
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

    showInitialContainer(){
        this.activitiesListFilterSearch.classList.add('activities__list__container__filter_search--hide');
        this.activitiesListInitial.classList.remove('activities__list__container__initial--hide');
        this.activitiesTextCount.innerHTML = this.activitiesListInitial.querySelectorAll('.activity').length;
    }
}

export default FilterActivities;