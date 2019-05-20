class FloatButton {
    constructor(){
        this.options = {
            root: document.querySelector('.float_button__button'),
            rootMargin: '0px',
            threshold: 1
        };

        this.initObserver()
    }

    initObserver(){
        let observer = new IntersectionObserver(()=>{console.log('dasd')}, this.options);
        console.log(observer);
    }

    events(){
        console.log('hi');
    }
}

export default FloatButton;