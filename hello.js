import readlineSync from 'readline-sync';

const sayHello = () => {
  const getName = readlineSync.question('Hi! What is your name? ');
  console.log(`Hello and welcome, ${getName}!`);
}

export default sayHello;