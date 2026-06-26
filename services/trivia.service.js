import { dateTimeFormater_il } from '../utils/dateTimeFormater_il.js';

export const getTriviaQuestion = async () => {

    // Fetch a random trivia question
    const response = await fetch(
        'https://opentdb.com/api.php?amount=1'
    );

    const data = await response.json();

    const trivia = data.results[0];

    const now = new Date();

    // Return the trivia question with the current date and time
    return {
        question: trivia.question,
        correctAnswer: trivia.correct_answer,
        category: trivia.category,
        difficulty: trivia.difficulty,
        date: dateTimeFormater_il.formatDate(now),
        time: dateTimeFormater_il.formatTime(now)
    };
};