#!/usr/bin/env node

import readlineSync from 'readline-sync';

const playGameEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    const operations = ['+', '-', '*'];

    for (let i = 1; i <= 3; i += 1) {
        const firstRandomNum = Math.floor(Math.random() * 101);
        const secondRandomNum = Math.floor(Math.random() * 101);
        const randomOperation = operations[Math.floor(Math.random() * operations.length)];

        let correctAnswer = '';
        switch (randomOperation) {
            case '+':
                correctAnswer = firstRandomNum + secondRandomNum;
                break;
            case '-':
                correctAnswer = firstRandomNum - secondRandomNum;
                break;
            case '*':
                correctAnswer = firstRandomNum * secondRandomNum;
                break;
        }

        console.log(`Question: ${firstRandomNum} ${randomOperation} ${secondRandomNum}`);
        console.log(`Debug: ${correctAnswer}`);
        const playerAnswer = readlineSync.question('Your answer: ');

        if (String(correctAnswer) !== playerAnswer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            return console.log(`Let's try again, ${name}!`);
        }

        console.log('Correct!');
    }

    return console.log(`Congratulations, ${name}!`);
};

playGameEven();
