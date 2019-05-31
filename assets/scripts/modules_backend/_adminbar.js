class AdminBar {
    constructor(){
        this.links = document.querySelector('.admin_bar_action');
        this.fields = document.querySelector('.admin_bar_fields');

        this.events();
    }


    events(){
        this.links.addEventListener('click', this.click.bind(this));
    }

    click(){

        console.log(this)
    }

}

export default AdminBar;
