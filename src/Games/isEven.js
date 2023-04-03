import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if number even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(gameRules, gameData);
