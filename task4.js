const dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log(dayOfWeek + " - Study JavaScript!");
    break;
    case "Tuesday":
        console.log(dayOfWeek + " - Sleep!");
        break;
        case "Wednesday":
    console.log(dayOfWeek + " - Eat");
    break;
    case "Thursday":
    console.log(dayOfWeek + " - Work");
    break;
    case "Friday":
    console.log(dayOfWeek + " - Exercise!");
    break;
    case "Saturday":
    console.log(dayOfWeek + " - Spent Time");
    break;
    case "Sunday":
    console.log(dayOfWeek + " - Play Football");
    break;
  default:
    console.log("Rest");
}

const numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
  sum += number;
}

console.log("Total sum:", sum);

const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(fruit, "- length:", fruit.length);
}

const student = { name: "Javidan", grade: 94 };

if (student.grade >= 60) {
  console.log(student.name, "passed with", student.grade);
} else {
  console.log(student.name, "failed with", student.grade);
}