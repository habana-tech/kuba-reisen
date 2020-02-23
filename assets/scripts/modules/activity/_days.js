class Days{
    constructor(){
        this.daysTitles = document.querySelectorAll('.day__title');
        this.events();
    }

    events(){
        this.daysTitles.forEach((dayTitle)=>{
            dayTitle.addEventListener('click', this.expand.bind(this));
        });
    }

    expand(e){
        e.preventDefault();

        let dayContent = e.target.parentNode.parentNode;
        dayContent.classList.toggle('day--active');
        dayContent.style.maxHeight ? dayContent.style.maxHeight = null : dayContent.style.maxHeight = dayContent.scrollHeight + "px";
    }

}

export default Days;