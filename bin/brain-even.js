#!/usr/bin/env node

import readlineSync from 'readline-sync';

const playGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 101);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    console.log(`Debug: ${correctAnswer}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

playGameEven();
