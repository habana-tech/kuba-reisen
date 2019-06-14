function setCookie(name, value, days=3) {
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
    constructor(){
        this.buttonAdd = document.querySelector('.float_button a');
        this.cartBar = document.querySelector('.cart_bar');
        this.cartBarText = document.querySelector('.cart_bar .cart_bar__content__text span');
        this.id = this.buttonAdd.getAttribute('data-id');
        this.init();
    }

    init(){
        if (this.previouslyAdded()) {
            this.enableOrDisableButton();
            this.buttonAdd.addEventListener('click', (e) => {
                e.preventDefault()
            });
        }
        else
            this.events();
    }

    previouslyAdded(){
        let currentValue = getCookie('ids');
        if (!currentValue)
            return false;

        return currentValue[1].split(',').includes(this.id);
    }

    events(){
        this.buttonAdd.addEventListener('click', this.addActivity.bind(this));
    }

    addActivity(e){
        e.preventDefault();
        this.setActivity();
    }

    removeEvents(){
        this.buttonAdd.removeEventListener('click', this.addActivity);
    }

    setActivity(){
        this.cartBar.classList.remove('cart_bar--initial');
        let currentValue = getCookie('ids');

        if (currentValue!==false) {
            let newValue = currentValue[1] + ','+this.id;
            setCookie('ids', newValue);
        }
        else{
            setCookie('ids', this.id);
        }

        this.showBarAndDisableButton();
        this.removeEvents();
    }

    enableOrDisableButton(){
        this.buttonAdd.children[0].classList.toggle('float_button__button--disable');
    }

    showBarAndDisableButton(){
        this.enableOrDisableButton();
        let currentValue = getCookie('ids');
        let activitiesAmount = currentValue[1].split(',').length;

        if (!this.cartBar.classList.contains('cart_bar--visible'))
            this.cartBar.classList.add('cart_bar--visible');

        this.cartBarText.innerHTML = activitiesAmount;
    }
}

export default AddtoCart;