import { Question } from "../models/question.js";
import { data } from "./data.js";

// Se crea una nueva pregunta y le enviamos la info
export const question = data.map(
    (question) =>
        new Question(question.question, question.choices, question.answer)
    );