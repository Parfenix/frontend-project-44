import readlineSyns from 'readline-sync';
import greeting from './cli.js';

const gameEngine = (gameRules, gameData) => {
  const userName = greeting();
  console.log(gameRules);
  const numbersOfRounds = 3;
  for (let i = 0; i < numbersOfRounds; i += 1) {
    const [question, answer] = gameData();
    const rightAnswer = answer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSyns.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
