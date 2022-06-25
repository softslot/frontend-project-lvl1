import readlineSync from 'readline-sync';

export default (title, gameplay) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(title);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = gameplay();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};
