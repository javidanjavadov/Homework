const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(numbers.length);

const myString = "Default";
const myNumber = 27;
const myBoolean = true;
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
console.log(sum)
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);
console.log(firstNumber >= secondNumber);
console.log(firstNumber <= secondNumber);

console.log(firstNumber % 2 === 0 && firstNumber > 0);
console.log(firstNumber % 2 === 0 || firstNumber > 0);
console.log(firstNumber >= 0);
