import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = calculate(num1, num2, operator);
  return [question, String(rightAnswer)];
};

export default () => gameEngine(description, getGameData);
