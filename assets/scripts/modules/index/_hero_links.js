<<<<<<< HEAD
class HeroLinks {
    constructor(){
        this.links = document.querySelectorAll('.hero__buttom-links__item a');
        this.events();
    }

    events(){
        this.links.forEach((x)=>x.addEventListener('click', this.expand.bind(this)));
    }

    expand(e){
        // e.preventDefault();
        this.links.forEach((x)=>x.parentNode.classList.remove('hero__buttom-links__item--active'));
        e.target.parentNode.classList.add('hero__buttom-links__item--active');
        return false;
    }

}

=======
class HeroLinks {
    constructor(){
        this.links = document.querySelectorAll('.hero__buttom-links__item a');
        this.events();
    }

    events(){
        this.links.forEach((x)=>x.addEventListener('click', this.expand.bind(this)));
    }

    expand(e){
        // e.preventDefault();
        this.links.forEach((x)=>x.parentNode.classList.remove('hero__buttom-links__item--active'));
        e.target.parentNode.classList.add('hero__buttom-links__item--active');
        return false;
    }

}

>>>>>>> 91cfd1d435910199c627ba0b79cad76f39139094
export default HeroLinks;