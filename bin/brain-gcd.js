#!/usr/bin/env node

import play from '../src/index.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const gameplay = () => {
  const randomNum1 = Math.ceil(Math.random() * 100);
  const randomNum2 = Math.ceil(Math.random() * 100);

  const divisor = randomNum1 < randomNum2 ? randomNum1 : randomNum2;
  let correctAnswer = 1;
  for (let i = divisor; i > 1; i -= 1) {
    if (randomNum1 % divisor === 0 && randomNum2 % divisor === 0) {
      correctAnswer = divisor;
      break;
    }
  }

  const question = `${randomNum1} ${randomNum2}`;

  return [question, correctAnswer];
};

play(gameTitle, gameplay);
