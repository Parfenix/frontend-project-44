import readline from 'readline-sync'

const greeting = () => {
   console.log('Welcome to the Brain Games!');
   const name = readline.question('May I have your name? ');
   console.log(`Hello, ${name}!`);
   return name;
}; 

export default greeting;