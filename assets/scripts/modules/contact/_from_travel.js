class FromTravel{
    constructor(){
        this.modalOverlay = document.querySelector('aside.from_travel_overlay');
        this.button = document.querySelector('.from_travel__action button');

        this.events();
    }

    events(){
        this.button.addEventListener('click', this.closeModal.bind(this));
    }

    closeModal(){
        this.modalOverlay.classList.add('from_travel_overlay--no-visible');
    }
}

export default FromTravel;