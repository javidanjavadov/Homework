
function calculateSum(numbers) {
  numbers = [
    5 , 10 , 15 , 20
  ]
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
  }

  calculateSum()

  let counter = 0
  while (counter <= 5) {
    console.log(counter);
    counter++;
  }
  let countDown = 5
  do {
    console.log(countDown)
    countDown--
  } while (countDown > 0);

  function evaluateGrade(grade) {
    if (grade >= 60) {
      return "Pass";
    } else {
      return "Fail";
    }
  }

  const grade1 = 70;
  const grade2 = 55;
 console.log("Grade 1 = " + evaluateGrade(grade1))
 console.log("Grade 2 = " + evaluateGrade(grade2))

