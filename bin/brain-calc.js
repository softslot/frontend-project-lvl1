#!/usr/bin/env node

import play from '../src/index.js';

const gameTitle = 'What is the result of the expression?';

const gameplay = () => {
  const operations = ['+', '-', '*'];
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
    default:
      throw new Error('Unknown operation!');
  }

  const question = `${firstRandomNum} ${randomOperation} ${secondRandomNum}`;

  return [question, correctAnswer];
};

play(gameTitle, gameplay);
