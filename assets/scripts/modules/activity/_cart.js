function setCookie(name, value, days=5) {
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

class Cart {
    constructor(){
        this.buttonAdd = document.querySelector('.float_button a');
        this.cartbarText = document.querySelector('.cart_bar .cart_bar__text span');
        this.events();
    }

    events(){
        this.buttonAdd.addEventListener('click', this.addActivity.bind(this));
    }

    addActivity(e){
        e.preventDefault();
        this.setActivity();
    }

    setActivity(){
        let id = this.buttonAdd.getAttribute('data-id');
        let currentValue = getCookie('ids');

        if (currentValue!==false) {
            let newValue = currentValue[1] + ','+id;
            setCookie('ids', newValue);
        }
        else{
            setCookie('ids', id);
        }

        console.log(getCookie('ids'));
    }
}

export default Cart;