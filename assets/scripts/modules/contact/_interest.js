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
        console.log(interest);
        interest.classList.toggle('interest--checked');
    }
}

export default Interest;