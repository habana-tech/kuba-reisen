import axios from 'axios';
import MakeActivity from "./_make_activity";

class FilterActivities {
    constructor(){
        this.urlFilters = '/activitiesApiPosFilter';
        this.urlSearch = '/activitiesApiPosSearch';

        this.activitiesTextCount = document.querySelector('.activities__list__title span');
        this.activitiesText = document.querySelector('.activities__list__title h3');

        this.activitiesList = document.querySelector('.activities__list__container');
        this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
        this.activitiesListFilterSearch = document.querySelector('.activities__list__container__filter_search');

        this.prototype = document.querySelector('.activities__list__item__prototype div');
        this.filters = document.querySelectorAll('.activities__selectors__filters__lists li');

        this.searchFormInput = document.querySelector('.activities__selectors__search form input[type="text"]');
        this.searchFormSubmit = document.querySelector('.activities__selectors__search form input[type="submit"]');

        this.loadingDots = document.querySelector('.loading_dots:first-child');
        this.getActivitiesFromSelectedFilter();

        this.events();
    }

    events(){
        this.filters.forEach((x)=>{x.addEventListener('click', this.activeFilter.bind(this) )});

        this.searchFormSubmit.addEventListener('click', this.getActivitiesFromSearch.bind(this));

        this.activitiesListFilterSearch.addEventListener('DOMNodeInserted', ()=>{
            let amountActivities = this.activitiesListFilterSearch.querySelectorAll('.activity').length;
            this.activitiesText.innerText =  amountActivities.toString()+' Aktivitäten gefunden';
        });
    }

    activeFilter(e){
        e.preventDefault();
        let element = e.target;
        element.classList.toggle('selected');
        this.getActivitiesFromSelectedFilter();
    }

    makeUrlForFilter(){
        let url = '';
        let filters = document.querySelectorAll('.activities__selectors__filters__lists li.selected');

        if (filters.length > 0) {
            let filtersText = '';
            for (let i = 0; i < filters.length - 1; i++)
                filtersText += filters[i].innerText + ',';
            filtersText += filters[filters.length - 1].innerText;
            url = this.urlFilters + '/' + filtersText;
        }
        return url;
    }

    makeUrlForSearch(){
        let url = '';
        if (this.searchFormInput.value !== '') {
            let filtersText = this.searchFormInput.value;
            url = this.urlSearch + '/' + filtersText;
        }
        return url;
    }

    getActivitiesFromSelectedFilter(){
        let url = this.makeUrlForFilter();
        if (url.length > 0)
            this.getActivities(url);
        else
            this.showInitialContainer();
    }

    getActivitiesFromSearch(e){
        e.preventDefault();

        let url = this.makeUrlForSearch();
        if (url.length > 0)
            this.getActivities(url);
        else
            this.showInitialContainer();
    }

    getActivities(url){
        let that = this;

        axios.get(url)
            .then(function (response) {


                let activities = response.data.activities;
                let loadMore = response.data.loadMore;

                if (activities.length > 0) {

                    that.activitiesListFilterSearch.querySelectorAll('.activity').forEach((activity) => {
                        activity.parentNode.removeChild(activity);
                    });

                    activities.forEach(function (activity) {
                        let newActivity = new MakeActivity(that.prototype).make(activity.id, activity.image, activity.imageAlt,
                            activity.name, activity.description, activity.link, activity.price);

                        that.activitiesListFilterSearch.appendChild(newActivity);
                    });
                }
                else //no se han encontrado
                    that.activitiesText.innerText = 'Mit diesen Filtern wurden keine Aktivitäten gefunden';

                that.hideLoadingAnimation();
            })
            .catch(function (error) {
                console.log(error);
            });

        this.showLoadingAnimation();
    }

    showInitialContainer(){
        this.activitiesListFilterSearch.classList.add('activities__list__container__filter_search--hide');
        this.activitiesListInitial.classList.remove('activities__list__container__initial--hide');

        let amountActivities = this.activitiesListInitial.querySelectorAll('.activity').length;
        this.activitiesText.innerText =  amountActivities.toString()+' Aktivitäten gefunden';
    }

    showLoadingAnimation(){
        this.activitiesText.innerText = 'Suchen Sie nach Aktivitäten mit diesen Filtern ...'; //buscando
        this.activitiesListFilterSearch.classList.remove('activities__list__container__filter_search--hide');
        this.activitiesListInitial.classList.add('activities__list__container__initial--hide');

        this.loadingDots.classList.toggle('loading_dots--visible');
    }

    hideLoadingAnimation(){
        this.loadingDots.classList.toggle('loading_dots--visible');
    }

}

export default FilterActivities;