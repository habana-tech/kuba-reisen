import axios from '../../vendors/axios.min';

class CartBar{
    constructor(){
        this.cartBar = document.querySelector('.cart_bar');
        this.url = _url_activitiesApi;
        this.check();
    }

    showBar(amountActivities){
        this.cartBar.classList.add('cart_bar--visible');
        this.cartBar.querySelector('span').innerHTML = amountActivities;
    }

    check(){
        let that = this;
        axios.get(this.url)
            .then(function (response) {
                let amountActivities = response.data.length;
                console.log(amountActivities);
                if (amountActivities > 0) {
                    that.showBar(amountActivities);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('checking activities')
    }
}

export default CartBar;