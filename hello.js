import readlineSync from 'readline-sync';
import ansi from 'ansi';

const sayHello = () => {
  const cursor = ansi(process.stdout);
  const getName = readlineSync.question('Hi! What is your name? ');
  cursor.yellow().write(`Hello and welcome, ${getName}!`);
  return;
}

export default sayHello;