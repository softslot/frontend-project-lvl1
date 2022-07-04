import play from '../index.js';

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const randomNum = Math.floor(Math.random() * 101);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  const question = randomNum;

  return [question, correctAnswer];
};

export default () => play(gameTitle, brainEven);
