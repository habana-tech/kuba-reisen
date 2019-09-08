class Interest{
    constructor(){
        this.interest = document.querySelectorAll('.interest');
        this.events();
        this.init();
    }

    events(){
        this.interest.forEach(x => x.addEventListener('click', this.toggleCheck.bind(this)))
    }

    init(){
        let interests = document.querySelectorAll('.travel-interest__options > div.interest');
        interests.forEach(function(interest){
            let input = interest.querySelector('input[type=checkbox]');
            if(input.checked)
            {
                interest.classList.add('interest--checked');
                interest.querySelector('svg').classList.add('icon-heart--fill-green');
            }
            
        })
    }

    toggleCheck(e){
        e.preventDefault();
        let interest = e.target.parentNode;
        interest.classList.toggle('interest--checked');
        interest.querySelector('svg').classList.toggle('icon-heart--fill-green');
        let input = interest.querySelector('input[type=checkbox]');
        input.checked = !input.checked;

    }
}

export default Interest;