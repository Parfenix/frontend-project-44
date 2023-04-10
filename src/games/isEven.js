import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
