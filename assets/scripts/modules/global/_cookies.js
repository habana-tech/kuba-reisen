import { setCookie, getCookie } from './_utils';

class Cookies{
    constructor(){
        this.allowBtn = document.querySelector('.cookie .cookie__btn button');
        this.message = document.querySelector('.cookie');
        this.overlay = document.querySelector('.cookie-overlay');

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
        //TODO: this MUST be do in server side and render dialog if necessary
        //If the cokie was set, the dialog doenst exist!! (twig didnt write it). Check if it work correctly
        if (getCookie('allow-cookies'))
            this.hide();
    }

    hide(){
        this.message.classList.add('cookie--no-visible');
        this.overlay.classList.add('cookie-overlay--no-visible');
    }
}

export default Cookies;