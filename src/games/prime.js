import play from '../index.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  const randomNum = Math.floor(Math.random() * 101);

  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = randomNum;

  return [question, correctAnswer];
};

export default () => play(gameTitle, brainPrime);
