const employeeDetails = {
  fullName: "Javadov Javidan",
  position: "Engineer",
  yearsOfExperience: 3,
  skills: ["JavaScript", "HTML", "CSS"],
  contact: {
    email: "default@gmail.com",
    phone: "98239829839822"
  }
};

delete employeeDetails.contact.email;
employeeDetails.department = "Engineering";

const { fullName: employeeName, position, contact, ...rest } = employeeDetails;
console.log(employeeName)
console.log(position);
console.log(contact);
console.log(rest);

const projectScores = [
  { projectId: 1, score: 95 },
  { projectId: 2, score: 88 },
];

console.log(projectScores[0].projectId);
console.log(projectScores[0].score);

const personalInfo = {
  homeAddress: "18 Street",
  emergencyContact: "Default",
  maritalStatus: "Married"
};

const completeEmployeeProfile = { employeeDetails, personalInfo };
console.log(completeEmployeeProfile);
