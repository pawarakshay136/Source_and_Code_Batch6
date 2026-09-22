let firstName = "Siddhant";
let lastName = "Gadakh";

// First 3 letters of first name
// slice(start, end) = end index is not included
let firstPart = firstName.slice(0, 3).toLowerCase();

// First 3 letters of last name
let lastPart = lastName.slice(0, 3).toLowerCase();

// Random 2 digit number from 10 to 99
// formula
// Math.floor(Math.random() * (max - min + 1)) + min
// max = 99, min = 10
// +1 includes the maximum value 99
let randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

// Generate username using + operator
let userId = firstPart + lastPart + randomNumber;

// Generate email using + operator
let email = userId + "@gmail.com";

// console.log("Name : " + firstName + " " + lastName);
// console.log("User ID : " + userId);
// console.log("Email : " + email); 

console.log(` 
Name    : ${firstName} ${lastName} 
User ID : ${userId} 
Email   : ${email} 
`);