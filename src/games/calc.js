import play from '../index.js';

const gameTitle = 'What is the result of the expression?';

const brainCalc = () => {
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

export default () => play(gameTitle, brainCalc);
