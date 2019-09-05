import { setCookie, getCookie } from './_utils';

class AddtoCart {
    constructor(buttonsSelector){
        this.buttonsAdd = document.querySelectorAll(buttonsSelector);
        this.cartBar = document.querySelector('.cart_bar');
        this.cartBarText = document.querySelector('.cart_bar .cart_bar__content__text span');
        this.activities = [];

        this.loadActivities();
        this.events();
        this.setStatus();
    }

    loadActivities(){
        let currentValue = getCookie('ids');
        if (!currentValue)
            return [];

        this.activities = currentValue[1].split(',');
    }

    events(){
        this.buttonsAdd.forEach((button)=>{
            button.addEventListener('click', this.addOrRemoveActivity.bind(this)
        )});
    }

    setStatus(){
        this.buttonsAdd.forEach((button)=>{
           let activityId = button.getAttribute('data-activity_id');
            if (this.activities.includes(activityId)){
               button.querySelector('svg.heart').classList.toggle('heart--fill-white');
            }
        });
    }

    containActivity(activityId){
        return this.activities.includes(activityId);
    }

    removeActivity(activityId){
        this.activities = this.activities.filter((x)=>{return x!==activityId});
        setCookie(this.activities.toString());
    }

    addActivity(activityId){
        this.activities.push(activityId);
        setCookie(this.activities.toString());
    }

    updateCartText(){
        if (this.activities.length === 0)
            this.cartBar.classList.add('cart_bar--initial');
        else {
            this.cartBar.classList.remove('cart_bar--initial');
            this.cartBarText.innerHTML = this.activities.length;
        }

        this.cartBar.classList.remove('cart_bar--visible');
    }

    showCart(){
        this.cartBar.classList.remove('cart_bar--visible');
        this.cartBar.classList.add('cart_bar--visible');
    }

    addOrRemoveActivity(e){

        let button = e.target;

        let activityId = button.getAttribute('data-activity_id');

        if (this.containActivity(activityId)){
            this.removeActivity(activityId);
            this.updateCartText();
        }
        else {
            this.addActivity(activityId);
            this.updateCartText();
            this.showCart()
        }

        button.classList.toggle('checked');
        button.querySelector('svg.heart').classList.toggle('heart--fill-white');
    }

}

export default AddtoCart;