const scores = [85, 92, 78, 95, 81];
const [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);

const student = {
  name: "Javidan",
  age: 17,
  isEnrolled: true
};
const { name, age } = student;
console.log(name);
console.log(age);

console.log(typeof firstScore);
console.log(typeof secondScore);
console.log(typeof name);
console.log(typeof age);
console.log(typeof student.isEnrolled);
console.log(scores.length);

console.log(firstScore + secondScore);
console.log(firstScore - secondScore);
console.log(firstScore > secondScore);
console.log(firstScore < secondScore);
console.log(firstScore > 80 && student.age > 20);
console.log(student.isEnrolled);
