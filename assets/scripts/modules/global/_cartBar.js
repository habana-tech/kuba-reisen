function getCookie(name) {
    let cArr = document.cookie.split(';');
    for(let i=0;i < cArr.length;i++) {
        let cookie = cArr[i].split("=",2);
        cookie[0] = cookie[0].replace(/^\s+/,"");
        if (cookie[0] === name)
            return cookie;
    }
    return false;
}

class CartBar{
    constructor(){
        this.cartBar = document.querySelector('.cart_bar');
        this.cartBarText = document.querySelector('.cart_bar .cart_bar__text span');
        this.check();
    }

    check(){
        let currentValue = getCookie('ids');
        let activitiesAmount = currentValue[1].split(',').length;

        if (!this.cartBar.classList.contains('cart_bar--visible'))
            this.cartBar.classList.add('cart_bar--visible');

        this.cartBarText.innerHTML = activitiesAmount;
    }
}

export default CartBar;