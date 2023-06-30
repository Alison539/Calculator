const readline = require('readline-sync');
console.log('Welcome to the calculator!!!');
console.log('Please enter your first number:');
const number1 = readline.prompt();
console.log('Please enter your second number:');
const number2 = readline.prompt();
let answer = +number1 * +number2;
console.log(answer);