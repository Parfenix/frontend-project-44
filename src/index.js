import readlineSyns from 'readline-sync';
import readline from 'readline-sync';

const gameEngine = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const username = readline.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);
  const numbersOfRounds = 3;
  for (let i = 0; i < numbersOfRounds; i += 1) {
    const [question, answer] = gameData();
    const rightAnswer = answer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSyns.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default gameEngine;
