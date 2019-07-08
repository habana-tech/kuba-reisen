class MakeActivity {
    constructor(prototype){
        this.prototype = prototype;
        this.imagesSizes = [1920, 1200, 1000, 900, 800, 600];
    }

    makeImageSrcSet(url){
        let srcSet = [];
        this.imagesSizes.forEach((dim)=>{
            srcSet.push('/static/min_width_'+dim+url+' '+dim+'w');
        });
        return srcSet.join(', ');
    }

    make(id, image, imageAlt, name, description, link){
        let newActivity = this.prototype.cloneNode(true);
        let imageSrcSet = this.makeImageSrcSet(image);

        newActivity.querySelector('.activity__content__actions__add a').setAttribute('data-activity_id', id);
        newActivity.querySelector('img').setAttribute('data-srcset', imageSrcSet);
        newActivity.querySelector('img').setAttribute('sizes', '(min-width:1000px) 33vw, 90vw');
        //TODO: put the base64version?
        // newActivity.querySelector('img').setAttribute('src', image);
        newActivity.querySelector('img').setAttribute('alt', imageAlt);
        newActivity.querySelector('img').classList.add('blur-up');
        newActivity.querySelector('img').classList.add('lazyload');
        newActivity.querySelector('h4').innerHTML = name;
        newActivity.querySelector('p').innerHTML = description;
        newActivity.querySelector('.activity__content__title a').setAttribute('href', link);

        return newActivity;
    }
}

export default MakeActivity;