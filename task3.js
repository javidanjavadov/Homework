console.log("Welcome to the voting form. Every nomination and votes for upcoming Presidents are taken into consideration. Please think well and hard before making your decision. We will personally do the consolidation and calculation. ")
const prompt=require("prompt-sync")({sigint:true}); 
let gender = prompt("Please enter your gender: ")
if (gender === "male" || gender === "female") {
    console.log("Code continuing...");
    let name = prompt("Please enter your name: ");
let surName = prompt("Please enter your surname: ");
let age = prompt("Please enter your age: ");
age = parseInt(age);
    if (age >= 18) {
        console.log("Congratulations! You are old enough to vote.");
        let presidentChoosement = prompt("Choose a president: ")
        console.log("You are " + name + " " + surName + " and You are " + age + '. ' + "You chose President" + presidentChoosement )   
        return;       
    } else if (isNaN(age)) {
        console.log("It is not a number. Please enter your age");
        return age;        
    } else {
        console.log("Sorry, you are too young to vote. You must be at least 18 years old.");
        return;
    }
  } 
 console.log("You have to choose male or female")
return; 

