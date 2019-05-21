class FilterStyle {

    constructor(){
        this.filters = document.querySelectorAll('.activities__selectors__filters__lists li');
        this.events();
    }

    events(){
        this.filters.forEach((x)=>{x.addEventListener('click', function (e) {
            e.preventDefault();
            let element = e.target;
            element.classList.toggle('selected');
        })})
    }
}

export default FilterStyle;