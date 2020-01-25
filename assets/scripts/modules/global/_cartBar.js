import {getCookie, setCookie} from './_utils';
import axios from 'axios';

class CartBar{
    constructor(){
        this.cartBar = document.querySelector('.cart_bar');
        if (this.cartBar == null)
            return;

        this.fetchUrl = '/activitiesApiGetById';
        this.activitiesIds = [];

        this.cartBar = document.querySelector('.cart_bar');
        this.cartBarActivitiesItemsContainer = document.querySelector('.cart_bar__content__activities');
        this.cartBarActivitiesItemsPrototype = document.querySelector('.cart_bar__content__activities__item__prototype > div');
        this.cartBarActivitiesAmount = document.querySelector('.cart_bar .cart_bar__title span');

        this.buttonsAddActivity = document.querySelectorAll('div[data-activity_id]');
        this.activitiesFilterContainer = document.querySelector('.activities__list__container__filter_search');

        this.loadingActivitiesFromCookie();
        this.events();
    }

    loadingActivitiesFromCookie(){
        let activitiesCookie = getCookie('products_cart');
        if (!activitiesCookie)
            return;


        let _activitiesIds = activitiesCookie[1] !== '' ? activitiesCookie[1].split(',') : [];

        _activitiesIds.forEach((activityId)=>{
            this.addActivity(activityId);
        });

        this.buttonsAddActivity.forEach((button)=>{
            let activityId = button.getAttribute('data-activity_id');
            if (this.activitiesIds.includes(activityId)){
                button.querySelector('svg.heart').classList.toggle('heart--fill-white');
            }
        });
    }

    events(){
        this.buttonsAddActivity.forEach((button)=>{
            button.addEventListener('click', this.addOrRemoveActivity.bind(this));
        });

        if (this.activitiesFilterContainer !== null)
            this.activitiesFilterContainer.addEventListener('DOMNodeInserted', (element)=>{
                let activity = element.target;
                let btn = activity.querySelector('.activity__content__actions__add');
                btn.addEventListener('click', this.addOrRemoveActivity.bind(this));
            });

        this.cartBarActivitiesItemsContainer.addEventListener('DOMNodeInserted', (element)=>{
            let activityItem = element.target;
            activityItem.querySelector('.cart_bar__content__activities__item__drop')
                .addEventListener('click', this._removeActivity.bind(this));
        });
    }

    makeCartBarActivityItem(activity){
        let activityItem = this.cartBarActivitiesItemsPrototype.cloneNode(true);

        activityItem.setAttribute('id', 'activityItem_'+activity.id);
        let image = activityItem.querySelector('img');
        image.setAttribute('src', activity.image);
        let name = activityItem.querySelector('h5');
        name.innerHTML = activity.name.length < 20 ? activity.name : activity.name.substring(0, 20)+'...';

        this.cartBarActivitiesItemsContainer.appendChild(activityItem);
    }

    fetchActivity(activityId){
        let url = this.fetchUrl+'/'+activityId;

        axios.get(url)
            .then((response)=>{
                let dataActivity = response.data.activity;
                this.makeCartBarActivityItem(dataActivity);
            })
            .catch(()=>{
                return null;
            });
    }

    _removeActivity(event){
        event.preventDefault();
        let element = event.target;
        let activityItem = element.parentNode;
        let activityId = activityItem.getAttribute('id');
        activityId = activityId.substring(13, activityId.length );
        this.removeActivity(activityId);
    }

    removeActivity(activityId){
        this.activitiesIds = this.activitiesIds.filter((activityIdOther)=>{
            return activityIdOther !== activityId
        });
        setCookie(this.activitiesIds.toString());

        let selectedHeart = document.querySelector('div[data-activity_id="'+activityId+'"]');
        console.log(selectedHeart);
        selectedHeart.classList.remove('checked');
        selectedHeart.querySelector('svg').classList.remove('heart--fill-white');

        this.cartBarActivitiesItemsContainer.querySelector('#activityItem_'+activityId).remove();
        this.cartBarActivitiesAmount.innerHTML = this.activitiesIds.length.toString();
    }

    addActivity(activityId){

        if (this.activitiesIds.length === 0)
            this.cartBar.classList.add('cart_bar--initial');
        else
            this.cartBar.classList.remove('cart_bar--initial');

        this.cartBar.classList.remove('cart_bar--visible');

        this.activitiesIds.push(activityId);
        this.fetchActivity(activityId);
        setCookie(this.activitiesIds.toString());

        this.cartBarActivitiesAmount.innerHTML = this.activitiesIds.length.toString();

        this.showCart();
    }

    addOrRemoveActivity(e){
        let button = e.target;

        let activityId = button.getAttribute('data-activity_id');

        if (this.activitiesIds.includes(activityId))
            this.removeActivity(activityId);
        else {
            this.addActivity(activityId);
            this.showCart();
        }

        button.classList.toggle('checked');
        button.querySelector('svg.heart').classList.toggle('heart--fill-white');
    }

    showCart(){
        this.cartBar.classList.remove('cart_bar--visible');
        this.cartBar.classList.add('cart_bar--visible');
    }
}

export default CartBar;