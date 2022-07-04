import play from '../index.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const randomNum1 = Math.ceil(Math.random() * 100);
  const randomNum2 = Math.ceil(Math.random() * 100);

  const smallestNum = randomNum1 < randomNum2 ? randomNum1 : randomNum2;
  let correctAnswer = 1;
  for (let divisor = smallestNum; divisor > 1; divisor -= 1) {
    if (randomNum1 % divisor === 0 && randomNum2 % divisor === 0) {
      correctAnswer = divisor;
      break;
    }
  }

  const question = `${randomNum1} ${randomNum2}`;

  return [question, correctAnswer];
};

export default () => play(gameTitle, brainGcd);
