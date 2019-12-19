import {getCookie} from './_utils';

class CartBar{
    constructor(){
        this.cartBar = document.querySelector('.cart_bar');

        if (this.cartBar == null)
            return;

        this.cartBarText = document.querySelector('.cart_bar .cart_bar__content__text span');
        this.check();
    }

    check() {
        let currentValue = getCookie('products_cart');
        if (!currentValue)
            return;

        let activitiesAmount = currentValue[1].split(',').length;

        this.cartBar.classList.remove('cart_bar--initial');
        if (activitiesAmount === 1)
            this.cartBarText.innerHTML = activitiesAmount + 'Produkt';
        else if (activitiesAmount > 1)
            this.cartBarText.innerHTML = activitiesAmount + 'Produkte';
    }

}

export default CartBar;