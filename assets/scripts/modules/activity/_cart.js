import axios from '../../vendors/axios.min';

class Cart {
    constructor(){
        this.buttonAdd = document.querySelector('.float_button a');
        this.events();
    }

    events(){
        this.buttonAdd.addEventListener('click', this.addActivity.bind(this));
    }

    addActivity(e){
        e.preventDefault();
        let url = this.buttonAdd.getAttribute('data-href');
        this._addActivity(url);
    }

    _addActivity(url){
        axios.get(url)
            .then(function (response) {
                console.log('added activity');
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('sending activity')
    }
}

export default Cart;