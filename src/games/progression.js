import play from '../index.js';

const gameTitle = 'What number is missing in the progression?';
const minLengthProgression = 5;

const brainProgression = () => {
  const initialProgression = Math.floor(Math.random() * 101);
  const stepProgression = Math.ceil(Math.random() * 10);
  const lengthProgression = Math.floor(Math.random() * 10) + minLengthProgression;

  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(initialProgression + (stepProgression * i));
  }

  const randomKey = Math.floor(Math.random() * progression.length);

  const correctAnswer = progression[randomKey];
  progression[randomKey] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => play(gameTitle, brainProgression);
