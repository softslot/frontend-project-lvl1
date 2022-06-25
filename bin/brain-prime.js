#!/usr/bin/env node

import play from '../src/index.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameplay = () => {
  const randomNum = Math.floor(Math.random() * 101);

  let correctAnswer = 'yes';
  if (randomNum > 1) {
    for (let divisor = Math.floor(randomNum / 2); divisor > 1; divisor -= 1) {
      if (randomNum % divisor === 0) {
        correctAnswer = 'no';
        break;
      }
    }
  }

  const question = randomNum;

  return [question, correctAnswer];
};

play(gameTitle, gameplay);
