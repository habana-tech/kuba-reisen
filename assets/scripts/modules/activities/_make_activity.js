// import clipHtml from 'text-clipper';

class MakeActivity {
    constructor(prototype){
        this.prototype = prototype;
        this.imagesSizes = [1920, 1200, 1000, 900, 800, 600];
        this.descriptionLenght = 75;
    }

    makeImageSrcSet(url, maxWidth){
        let srcSet = [];
        this.imagesSizes.forEach((dim)=>{
            if (dim <= maxWidth)
                srcSet.push('/media/cache/resolve/min_width_' + dim + '/' + url + ' ' + dim + 'w');
        });
        return srcSet.join(', ');
    }

    make(activity){

        let newActivity = this.prototype.cloneNode(true);
        let imageSrcSet = this.makeImageSrcSet(activity.image.staticImagePath, activity.image.imageSize);

        newActivity.querySelector('.activity__content__actions__add').setAttribute('data-activity_id', activity.id);

        newActivity.querySelector('img').setAttribute('data-srcset', imageSrcSet);
        newActivity.querySelector('img').setAttribute('sizes', '(min-width:1000px) 33vw, 90vw');
        newActivity.querySelector('img').setAttribute('src', activity.image.base64);
        newActivity.querySelector('img').setAttribute('alt', activity.image.description);
        newActivity.querySelector('img').classList.add('blur-up');
        newActivity.querySelector('img').classList.add('lazyload');
        newActivity.querySelector('h4').innerHTML = activity.name;
        newActivity.querySelector('.activity__content__description a').innerHTML = clipHtml(activity.description, this.descriptionLenght, {indicator:''});
        // newActivity.querySelector('.activity__content__description a').innerHTML = clipHtml(activity.description, this.descriptionLenght, {indicator:''});
        newActivity.querySelector('.activity__image a').setAttribute('href', activity.link);
        newActivity.querySelector('.activity__content__title a').setAttribute('href', activity.link);
        newActivity.querySelector('.activity__content__description a').setAttribute('href', activity.link);

        if(activity.price !== null)
            newActivity.querySelector('.activity__content__price span').innerHTML = 'ab <br>'+activity.price + " €";
        else
            newActivity.querySelector('.activity__content__price').setAttribute('hidden', 'hidden');

        return newActivity;
    }
}

export default MakeActivity;