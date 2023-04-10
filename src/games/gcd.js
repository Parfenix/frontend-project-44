import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const NOD = (num1, num2) => {
  if (num2 > num1) return NOD(num2, num1);
  if (!num2) return num1;
  return NOD(num2, num1 % num2);
};

const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = NOD(num1, num2);
  return [question, String(rightAnswer)];
};

export default () => gameEngine(description, getGameData);
