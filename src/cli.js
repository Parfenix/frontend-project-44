import readline from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const username = readline.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export default greeting;
