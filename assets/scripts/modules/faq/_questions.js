class Questions{
    constructor(){
        this.questions_titles = document.querySelectorAll('.question__title');
        this.events();
    }

    events(){
        this.questions_titles.forEach((x)=>{x.addEventListener('click',
            this.expand
        )});
    }

    expand(e){
        console.log(e);
        let answer = e.target.parentNode.parentNode.children[1];
        answer.classList.toggle('question__answer--active');
        answer.style.maxHeight ? answer.style.maxHeight = null : answer.style.maxHeight = answer.scrollHeight + "px";
    }

}

export default Questions;