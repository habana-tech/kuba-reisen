class StoriesLayout {
    constructor(){
        this.storiesSelectors = document.querySelectorAll('.activities__stories__items li');
        this.storiesAmount = document.querySelectorAll('.activities__stories__story').length;
        this.storiesContainer = document.querySelector('.activities__stories__story__container');
        this.events();
        this.init();
    }

    events(){
        this.storiesSelectors.forEach((storySelector)=>{
            storySelector.addEventListener('click', this.changeActiveStory.bind(this));
        });
    }

    init(){
        this.storiesSelectors[0].classList.add('active');

        this.storiesContainer.setAttribute('style', 'height: '+document.querySelector('#story-0').clientHeight+'px;');
        for(let id = 0; id < this.storiesAmount; id++) {
            let displacement = id*100;
            let story = document.querySelector('#story-'+id);
            story.setAttribute("style", "transform: translateX(" + displacement + "%);");
        }
    }

    changeActiveStory(e){
        let storySelector = e.target;

        this.storiesSelectors.forEach((_storySelector)=>{
            _storySelector.classList.remove('active')
        });
        storySelector.classList.add('active');

        let storyId = storySelector.getAttribute('data-story');
        let newActiveStoryPos = parseInt(storyId.split('-')[1]);
        this.storiesContainer.height = document.querySelector(storyId).clientHeight;

        for(let id = 0; id < this.storiesAmount; id++) {
            let displacement = (id-newActiveStoryPos)*100;

            let story = document.querySelector('#story-'+id);
            story.setAttribute("style", "transform: translateX(" + displacement + "%);");
        }
    }
}


export default StoriesLayout;