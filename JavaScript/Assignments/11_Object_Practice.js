// 15th October 2026, Thursday


// object declare 
const person = {
    name: "Akshay A Pawar",
    age: 32,
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    isIndian: true,
    bloodGroup: "A+",
    sex: "Male",
    qualification: "Graduate",
    skills: ["Git", "GitHub", "JavaScript", "Java"],
    hobbies: ["Gardening", "Reading", "Mobile Photography"],
    favoriteColor: "Blue",
    favoriteFood: "Puran Poli",
    favoriteSport: "Football"
};

// Retrive 

// 1. Using dot notation 
console.log(person.name);
console.log(person.city);

// 2. Using bracket notation 
console.log(person["age"]);
console.log(person["skills"]);


// Add 

// 1. add property using dot notation   
person.email = "akshay@example.com";
console.log(person);

// 2. add property using bracket notation 
person["favoriteLanguage"] = "JavaScript";
console.log(person);


// Update 

// 1. Update value using dot notation 
person.city = "Mumbai";
console.log(person);

// 2. update value using bracket notation 
person["favoriteColor"] = "Red";
console.log(person);


// Delete 

// 1. Delete property using dot notation 
delete person.email;
console.log(person);

// 2. Delete property using bracket notation 
delete person["favoriteLanguage"];
console.log(person);


