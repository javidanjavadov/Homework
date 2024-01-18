const studentProfile = {
    name: "Javadov Javidan",
    age: 17,
    course: "Computer Science",
    hobbies: ["default1", "default2", "default3"],
   };
   
   delete studentProfile.course;
   
   const { name: studentName, age, rest } = studentProfile;
   
   console.log(studentName);
   console.log(age);
   console.log(rest);
   
   const grades = [85, 92, 78, 95];
   
   console.log(grades[0]);
   console.log(grades[1]);
   
   const additionalInfo = {
    address: "493 Street",
    phoneNumber: "3929832989832",
   };
   
   const completeProfile = { studentProfile, additionalInfo };
   
   console.log(completeProfile);
   
