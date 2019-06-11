import axios from '../../vendors/axios.min';

class FilterStyle {
    constructor(){
        this.url = '/activitiesApiPosFilter';

        this.activitiesTextCount = document.querySelector('.activities__list__title span');
        this.activitiesList = document.querySelector('.activities__list__container');
        this.prototype = document.querySelector('.activities__list__item-prototype div');
        this.filters = document.querySelectorAll('.activities__selectors__filters__lists li');

        this.events();
    }

    events(){
        this.filters.forEach((x)=>{x.addEventListener('click', this.selectAndGetData.bind(this) )});
        this.activitiesList.addEventListener('DOMNodeInserted', ()=>{
            this.activitiesTextCount.innerHTML = this.activitiesList.querySelectorAll('.activity').length;
        })
    }

    selectAndGetData(e){
        e.preventDefault();
        let element = e.target;
        element.classList.toggle('selected');
        this.getData();
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
                        // that.activitiesTextCount.innerHTML = activities.length;
                        that.activitiesList.querySelectorAll('.activity').forEach((x) => {
                            x.parentNode.removeChild(x);
                        });

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
    }
}

export default FilterStyle;