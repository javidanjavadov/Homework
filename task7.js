const greet = (name, greeting = "Hello") => `${greeting}, ${name}!`;

console.log(greet("Guys"));
console.log(greet("Javidan", "Hi"));

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);

console.log(factorial(5));

const sumAll = (...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sumAll(1, 2, 3, 4, 5));

const first = () => {
  console.log("First function started");
  console.log("First function ended");
  second();
};

const second = () => {
  console.log("Second function started");
  console.log("Second function ended");
  third();
};

const third = () => {
  console.log("Third function started");
  console.log("Third function ended");
};

first();
