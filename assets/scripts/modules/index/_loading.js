import imagesLoaded from 'imagesloaded';

class Loading{
    constructor(){
        this.hero = document.querySelector('section.hero .hero__image');
        this.loading = document.querySelector('.overlay-loading');
        this.body = document.querySelector('body');
        this.event();
    }

    event(){
        imagesLoaded(this.hero , this.hideLoading.bind(this));
    }

    hideLoading(){
        console.log('hide animation');
        this.body.classList.remove('loading');
        this.body.classList.add('render');
        setTimeout(()=>this.loading.style.display = 'none', 750);
    }
}

export default Loading;
