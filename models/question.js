export class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  // Metodo de respuesta
  correctAnswer(choices) {
    return choices === this.answer;
  }
}
