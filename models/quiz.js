import { Question } from "./question.js";
 //clase para las preg y respuestas 
export class Quiz{
    questionIndex = 0;
    score = 0;

    constructor(questions){
        this.questions = questions;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }
    //sirve para saber si el quiz a terminado 
    isEnded(){
        return this.question.length === this.questionIndex;
    }

    //Sirve para saber si es la respuesta o no
    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer))
        this.score++;
    this.questionIndex++;
    }
}