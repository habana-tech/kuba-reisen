class Interest{
    
    constructor(){
        this.interest = document.querySelectorAll('.interest');
        this.events();
        this.init();
    }

    events(){
        this.interest.forEach((interest) => {
            interest.addEventListener('click', this.toggleCheck.bind(this))
            });
    }

    init(){
        let interests = document.querySelectorAll('.travel-interest__options > div.interest');
        interests.forEach((interest) => {
            let input = interest.querySelector('input[type=checkbox]');
            if(input.checked)
            {
                interest.classList.add('interest--checked');
                interest.querySelector('svg.heart').classList.add('heart--fill-green');
            }
            
        })
    }

    toggleCheck(e){
        e.preventDefault();
        let interest = e.target;
        interest.classList.toggle('interest--checked');
        interest.querySelector('svg.heart').classList.toggle('heart--fill-green');
        let input = interest.querySelector('input[type=checkbox]');
        input.checked = !input.checked;
    }
}

export default Interest;