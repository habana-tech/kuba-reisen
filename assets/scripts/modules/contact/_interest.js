class Interest{
    constructor(){
        this.interest = document.querySelectorAll('.interest');
        this.events();
    }

    events(){
        this.interest.forEach(x => x.addEventListener('click', this.toggleCheck.bind(this)))
    }

    toggleCheck(e){
        e.preventDefault();
        let interest = e.target.parentNode;
        interest.classList.toggle('interest--checked');
        interest.querySelector('svg.heart').classList.toggle('heart--fill-green');

    }
}

export default Interest;