const prompt=require("prompt-sync")({sigint:true}); 
let name = prompt("Please enter your name: ");
let surName = prompt("Please enter your surname: ");
let age = prompt("Please enter your age: ");
age = parseInt(age);
if (age >= 18) {
    console.log("Congratulations! You are old enough to vote.");
    let presidentChoosement = prompt("Choose a president: ")

    console.log("You are " + name + " " + surName + " and You are " + age + '. ' + "You chose President" + presidentChoosement )  
      
  } else
    console.log("Sorry, you are too young to vote. You must be at least 18 years old.");
    return;
  

