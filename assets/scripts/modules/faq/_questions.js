<<<<<<< HEAD
class Questions{
    constructor(){
        this.questions_titles = document.querySelectorAll('.question__title');
        this.questions_answer = document.querySelectorAll('.question__answer');
        this.events();
    }

    events(){
        this.questions_titles.forEach((x)=>{x.addEventListener('click',
            this.expand
        )});
    }

    expand(e){
        let answer = e.target.parentNode.parentNode.children[1];
        answer.classList.toggle('question__answer--active');
    }

}

=======
class Questions{
    constructor(){
        this.questions_titles = document.querySelectorAll('.question__title');
        this.questions_answer = document.querySelectorAll('.question__answer');
        this.events();
    }

    events(){
        this.questions_titles.forEach((x)=>{x.addEventListener('click',
            this.expand
        )});
    }

    expand(e){
        let answer = e.target.parentNode.parentNode.children[1];
        answer.classList.toggle('question__answer--active');
    }

}

>>>>>>> 91cfd1d435910199c627ba0b79cad76f39139094
export default Questions;