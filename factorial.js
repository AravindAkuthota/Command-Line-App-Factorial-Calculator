const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
  const factorial = calculateFactorial(number);
  console.log(`The factorial of ${number} is ${factorial}`);
  rl.close();
});

function calculateFactorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}
