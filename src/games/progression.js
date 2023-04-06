import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const getArithmeticProgression = (start, step, length) => {
  const iter = (progression, counter) => {
    if (counter === length) {
      return progression;
    }
    return iter([...progression, (start + counter * step)], counter + 1);
  };
  return iter([], 0);
};

const getGameData = () => {
  const length = 10;
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 50);
  const progression = getArithmeticProgression(start, step, length);
  const hiddenElement = getRandomNumber(0, length - 1);
  const rightAnswer = progression[hiddenElement];
  progression[hiddenElement] = '...';
  const question = progression.join(' ');
  return [question, String(rightAnswer)];
};

export default () => gameEngine(gameRules, getGameData);
