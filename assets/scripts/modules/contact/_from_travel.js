class FromTravel{
    constructor(){
        this.modalOverlay = document.querySelector('aside.from_travel_overlay');
        this.button = document.querySelector('.from_travel__action button');

        this.events();
    }

    events(){
        if(this.button)
            this.button.addEventListener('click', this.closeModal.bind(this));
    }

    closeModal(e){
        e.preventDefault();
        this.modalOverlay.classList.add('from_travel_overlay--no-visible');
    }
}

export default FromTravel;