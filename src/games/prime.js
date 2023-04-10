import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return 'no';

  if (num === 2 || num === 3) return 'yes';

  if (num % Math.sqrt(num) === 0) return 'no';

  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
