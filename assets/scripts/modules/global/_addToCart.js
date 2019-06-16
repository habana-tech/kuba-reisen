function setCookie(value, name='ids' , days=3) {
    let date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    let expires = "; expires="+date.toGMTString ();
    document.cookie = name + "=" + value +
    expires + "; path=/";
}

function getCookie(name) {
    let cArr = document.cookie.split(';');
        for(let i=0;i < cArr.length;i++) {
            let cookie = cArr[i].split("=",2);
            cookie[0] = cookie[0].replace(/^\s+/,"");
            if (cookie[0] == name)
                return cookie;
        }
    return false;
}


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
        this.buttonsAdd.forEach((x)=>{
            x.addEventListener('click', this.addOrRemoveActivity.bind(this)
            )});
    }

    setStatus(){
        this.buttonsAdd.forEach((x)=>{
           let activityId = x.getAttribute('data-activity_id');
            if (this.activities.includes(activityId)){
               x.parentNode.querySelector('svg').classList.toggle('icon-heart--fill-green');
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
        e.preventDefault();

        let button = e.target;
        let parent = e.target.parentNode;

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

        parent.classList.toggle('checked');
        parent.querySelector('svg').classList.toggle('icon-heart--fill-green')
    }

}

export default AddtoCart;