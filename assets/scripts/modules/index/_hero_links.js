class HeroLinks {
    constructor(){
        this.links = document.querySelectorAll('.hero__buttom-links__item a');
        this.events();
    }

    events(){
        this.links.forEach((link)=>link.addEventListener('click', this.expand.bind(this)));
    }

    expand(e){
        e.preventDefault();
        let activeLink = e.target;

        this.links.forEach((link)=>{
            let parent = link.parentNode;
            if (parent !== activeLink.parentNode)
                link.parentNode.classList.remove('hero__buttom-links__item--active');
        });

        activeLink.parentNode.classList.toggle('hero__buttom-links__item--active');
    }

}

export default HeroLinks;