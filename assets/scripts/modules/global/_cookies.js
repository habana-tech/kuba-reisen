import { setCookie, getCookie } from './_utils';

class Cookies{
    constructor(){
        //If the cokie was set, the dialog doenst exist!! (twig didnt write it) and JS twrows an error
        this.allowBtn = document.querySelector('.cookie .cookie__btn button');
        this.message = document.querySelector('.cookie');
        this.overlay = document.querySelector('.cookie-overlay');
        
        //Only if the btn exist.
        if(this.allowBtn) 
            this.event();
    }

    event(){
        this.dialog();
        this.allowBtn.addEventListener('click', this.allowCookies.bind(this));      
    }

    allowCookies(){
        console.info('allow cookies');
        setCookie('allow', 'allow-cookies');
        this.hide();
    }

    dialog(){
        if (getCookie('allow-cookies'))
            this.hide();
    }

    hide(){
        this.message.classList.add('cookie--no-visible');
        this.overlay.classList.add('cookie-overlay--no-visible');
    }
}

export default Cookies;