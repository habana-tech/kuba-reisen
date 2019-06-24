class MakeActivity {
    constructor(prototype){
        this.prototype = prototype;
    }

    make(id, image, imageAlt, name, description, link){
        let newActivity = this.prototype.cloneNode(true);

        newActivity.querySelector('.activity__content__actions__add a').setAttribute('data-activity_id', id);
        newActivity.querySelector('img').setAttribute('src', image);
        newActivity.querySelector('img').setAttribute('alt', imageAlt);
        newActivity.querySelector('h4').innerHTML = name;
        newActivity.querySelector('p').innerHTML = description;
        newActivity.querySelector('.activity__content__title a').setAttribute('href', link);

        return newActivity;
    }
}

export default MakeActivity;