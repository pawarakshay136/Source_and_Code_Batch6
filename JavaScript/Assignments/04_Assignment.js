// ============================================
// 04_ASSIGNMENT -> TOPIC : JS STRINGS (+ revision of basics, datatypes & numbers)
// BASED ON : LECTURE/04_JS_String.js  +  THEORY_NOTES/04_JS_String.md
//
// HOW TO RUN : open terminal -> node 04_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : STRING BASICS -------------------

//Q1 --> Declare the SAME string "JavaScript" in all 3 ways
//       (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.

// Output
// JavaScript string
// JavaScript string
// JavaScript string

console.log("<-------------------- Q1 ------------------------------------>")

let doubleQuoteString = "JavaScript"; 
let singleQuoteString = 'JavaScript'; 
let backtickString = `JavaScript`; 

console.log("Double Quote String :- ", doubleQuoteString," and its Datatype is :-",typeof doubleQuoteString); 
console.log("Single Quote String :- " ,singleQuoteString," and its Datatype is :-", typeof singleQuoteString); 
console.log("Backtick String :- ", backtickString," and its Datatype is :-", typeof backtickString);

console.log("<-------------------- Q2 ------------------------------------>")

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.

// Output
// String number String boolean

let a = "123"; // "123" is string because its inside quotes
let b = 123;  // number
let c = "true"; // "true" is string because its inside quotes
let d = true;  // boolean

console.log(typeof a, typeof b, typeof c, typeof d);
// string number string boolean

console.log("<-------------------- Q3 ------------------------------------>")

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)

// Output:
// 10 
// A 
// d

let city = "Aurangabad"
// a) print the length of the string
console.log("Length of the string is:- ", city.length) 
// b) print the FIRST character
console.log("First character is:-" , city[0]) // string index starts from 0
// c) print the LAST character WITHOUT counting manually
console.log("Last character is:- ", city[city.length - 1])
// city.length = 10
// last index = 10 - 1 = 9
// city[9] = d

console.log("<-------------------- Q4 ------------------------------------>")

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?

// Output:
// 3
// 0

let spaces = "   "
console.log("The length of string is:-", spaces.length) 
console.log("The length of empty string is:-", "".length) 
// spaces are characters in string so 3 spaces so length = 3
// empty string has no character so length is 0

console.log("<-------------------- Q5 ------------------------------------>")

//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.

// Output:
// s
// t

let lang = "JavaScript"
console.log("Given string is:- ", lang)
console.log("Character at 4th index is:- ", lang[4]) // string[index] // lang[4]
console.log("Character at 9th index is:- ", lang[9]) // string[index] // lang[9]
console.log(lang[100]); //undefined
console.log(lang[-5]); // undefined 
// Index 100 and -5 do not exist 
// Using [] for an invalid index gives undefined.

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

console.log("<-------------------- Q6 ------------------------------------>")

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?

// Output:
// hello Siddhant
// hello  ${name}
// hello ${name}

let name = "Siddhant"
console.log(`hello ${name}`) // hello Siddhant
console.log("hello ${name}") // hello ${name}
console.log('hello ${name}') // hello ${name}

// ${} placeholders work only inside backticks (``)
// In normal quotes " " or ' ' = ${name} is treated as normal text


console.log("<-------------------- Q7 ------------------------------------>")

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.

// Output:
// false
// true
// false

let str = "JavaScript"
console.log(str.includes("script"))
console.log(str.includes("Script"))
console.log(str.includes("java"))

// String methods are case sensitive 
// "Script" exists exactly in "JavaScript"
// "script" and "java" do not match the same uppercase/lowercase letters

console.log("<-------------------- Q8 ------------------------------------>")

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?

// Output:
// hello

let greeting = "hello"
greeting.toUpperCase()
console.log(greeting)

// REASON: 
// Strings are immutable in Javascript
// toUpperCase() returns a NEW string
// The returned value was not stored in a variable
// so the original greeting remains "hello"


console.log("<-------------------- Q9 ------------------------------------>")

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?

// Output:
// 10
// h
// Error

console.log("HelloWorld".toUpperCase().length)
console.log("HelloWorld".toLowerCase().charAt(0))
// console.log("HelloWorld".length.toLowerCase()) 

// REASON
// toUpperCase() returns a String then .length then returns Number 10
// toLowerCase() returns a String then  charAt(0) works on String 
// .length returns a Number 
// toLowerCase() is a string method
// so it cannot be used directly on number 
// so gives error


console.log("<-------------------- Q10 ------------------------------------>")

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?

// Output:
// Script
// Script
// Script

let str1 = "JavaScript"
console.log(str1.substring(4, 10))
console.log(str1.substr(4, 6))
console.log(str1.slice(4))

// REASON: 
// substring(4, 10) = starts at index 4 and stops before index 10 
// substr(4, 6) = starts at index 4 and takes 6 characters
// slice(4) = starts at index 4 and goes to the end. 
// All three give Script here

console.log("<-------------------- Q11 ------------------------------------>")

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?

// Output:
// 1
// 18
// -1


let fruit = "banana apple banana"
console.log(fruit.indexOf("a"))
console.log(fruit.lastIndexOf("a"))
console.log(fruit.indexOf("mango"))

// Reason 
// indexOf() gives the first matching index 
// lastIndexOf() gives the last matching index 
// If the value is not found indexOf() returns -1 

console.log("<-------------------- Q12 ------------------------------------>")

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.

// Output:
// 2
// 5
// 5
// 8

let messy = "   JS   "
console.log(messy.trim().length)
console.log(messy.trimStart().length)
console.log(messy.trimEnd().length)
console.log(messy.length)

// Original string = 3 spaces + JS + 3 spaces = 8 
// trim() removes spaces from both sides = JS = gives length 2
// trimStart() removes only starting spaces = "JS " = length 5
// trimEnd() removes only ending spaces = " JS" = length 5
// Original string length remains 8


console.log("<-------------------- Q13 ------------------------------------>") 
//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.

// Output:
// a, b, c
// h e l l o
// [ 'hello', 'world' ]


console.log("a,b,c".split(",").length)
console.log("hello".split("").length)
console.log("hello world".split(" "))

// Reason
// split() converts a string into an array based on the separator you give
// Length = starts counting from 1 and Index = starts counting from 0
// "a,b,c".split(",") = ["a", "b", "c"] = length 3 
// "hello".split("") = ["h", "e", "l", "l", "o"] = length 5
// "hello world".split(" ") = ["hello", "world"] = length 2

// ------------------- SECTION C : LOGIC BUILDING -------------------

console.log("<-------------------- Q14 ------------------------------------>")

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()

// Output:
// siddhant

let username = "   SIDDHANT   "
let cleanUsername = username.trim().toLowerCase(); // method chaning
console.log("The final result is:- ", cleanUsername)
// trim() = removes spaces from the beginning and end of a string
// toLowerCase() = converts all letters in a string to lowercase

console.log("<-------------------- Q15 ------------------------------------>")

//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?

// Output
// removeallthespacesfromthissentence

let sentence = " remove all the spaces from this sentence "
let sentenceWithoutSpaces = sentence.replaceAll(" ", "");
console.log("The sentence with EVERY space removed is:- ", sentenceWithoutSpaces)

// trim() removes spaces only from the beginning and end
// replaceAll(" ", "") removes every space in the string

console.log("<-------------------- Q16 ------------------------------------>")

//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances

// Output
// this movie is good and the acting is bad too
// this movie is good and the acting is good too

let review = "this movie is bad and the acting is bad too"
// a) replace only the FIRST "bad" with "good"
console.log(review.replace("bad","good"))
// b) replace ALL "bad" with "good"
console.log(review.replaceAll("bad","good"))

// replace() replaces only the first matching "bad"
// replaceAll() replaces all matching "bad" values


console.log("<-------------------- Q17 ------------------------------------>")
//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...

// Output
// red
// green
// blue
// yellow

let colors = "red,green,blue,yellow"
let colorsArry = colors.split(",")

console.log("The color array length is :- ", colorsArry.length)
console.log(colorsArry[0]) // 
console.log(colorsArry[1])
console.log(colorsArry[2])
console.log(colorsArry[3])
// console.log(colorsArry[0] + " |", colorsArry[1] + " |", colorsArry[2] + " |", colorsArry[3]);   

// array index starts from 0
// array length starts form 1

console.log("<-------------------- Q18 ------------------------------------>")
//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.

// Output
// Script
// Script
// Script

let javaScript = "JavaScript"; 

console.log(javaScript.substring(4, 10)); 
console.log(javaScript.substr(4, 6)); 
console.log(javaScript.slice(4, 10));

console.log("<-------------------- Q19 ------------------------------------>")
//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length

// Output
let line = "i am learning javascript and javascript is fun"
// a) print the total number of characters (including spaces)
console.log("Total number of characters INCLUDING spaces :- ", line.length)
// b) print the number of characters EXCLUDING spaces
console.log("Total number of Characters EXCLUDING spaces :- ", line.replaceAll(" ","").length)


console.log("<-------------------- Q20 ------------------------------------>")
//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?

// Generate a random 6 digit OTP between 100000 and 999999
// Math.random() = generates a random decimal between 0 and 1
// (999999 - 100000 + 1) = calculates the total range, +1 includes 999999
// Math.floor() = removes the decimal part
// +100000 = ensures the OTP starts from 100000
let otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

// Print the OTP using a template literal
console.log(`Your OTP is : ${otp}`);

// minimum value is 100000
// Therefore the OTP always contains 6 digits
// If minimum was 0 a random number could start with 0
// 100000 guarantees that the generated value is a 6 digit number

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

console.log("<-------------------- Q21 ------------------------------------>")
//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?

// Answer
// a)
// Strings are immutable in Javascript  means once a string is created
// its original value cannot be changed directly
// String methods return a new string instead of modifying the original string

// b) 
let originalString = "hello"; 
originalString.toUpperCase(); 
console.log(originalString); // hello

// c) How do we "change" a string in real projects?
// We must store the returned value in a variable
// We can either assign it back to the same variable or store it in a new variable
let changedString = originalString.toUpperCase(); 
console.log(changedString); // HELLO

console.log("<-------------------- Q22 ------------------------------------>")
//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.

// Answer
// Difference between substring(), substr() and slice()
// TABLE:
//
// | Method     | 2nd Argument          | End Index Included? | Negative Index? | Status        |
// |------------|-----------------------|---------------------|-----------------|---------------|
// | substr()   | Number of characters  | Takes count instead | No              | Deprecated    |
// | substring()| Ending index          | No                  | No              | Preferred     |
// | slice()    | Ending index          | No                  | Yes             | Most used     |


// substr(start, count)
// -> 2nd argument means NUMBER OF CHARACTERS
// -> Example:
//    "JavaScript".substr(4, 6)
//    Output -> "Script"


// substring(start, end)
// -> 2nd argument means ENDING INDEX
// -> End index is NOT included
// -> Negative index is NOT supported
// -> Example:
//    "JavaScript".substring(4, 10)
//    Output -> "Script"


// slice(start, end)
// -> 2nd argument means ENDING INDEX
// -> End index is NOT included
// -> Negative index IS supported
// -> Example:
//    "JavaScript".slice(4, 10)
//    Output -> "Script"


// NOTE:
// substr() is a legacy/old method
// It is deprecated
// Prefer substring() or slice().

// WHICH ONE WOULD I USE IN A REAL PROJECT?
// I would use slice() because it is the most used
// and it supports negative indexes
// It is also useful for extracting a part of a string

console.log("<-------------------- Q23 ------------------------------------>")
//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?

// Output
// 55
// 0

console.log("5" + 5)
console.log("5" - 5)
// "5" + 5 = + operator with a String performs concatenation
// So the Number 5 is joined with the String "5"
// Result -> "55" (String)

// "5" - 5 = - operator performs numeric subtraction
// The String "5" is converted to Number 5 
// 5 - 5 = 0 (Number)
// Therefore the two operators behave differently



console.log("<-------------------- Q24 ------------------------------------>")
//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).

/* 
PROPERTY VS METHOD

PROPERTY: 
A property gives information about the data
It is used WITHOUT brackets

Example: let text = "hello"; 
console.log(text.length);


METHOD: 
A method performs an action on the data
It is used WITH brackets

Example: 
console.log(text.toUpperCase());


Difference: 
Property -> length 
Method -> toUpperCase() 

Property -> no () 
Method -> ()

*/


// ------------------- SECTION E : BONUS CHALLENGE -------------------

console.log("<-------------------- Q25 ------------------------------------>")
//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)

// RANDOM PASSWORD GENERATOR
// From the given string, generate a random 4 character password
// Pick 4 random characters and join them using a template literal

let chars = "abcdefghijklmnopqrstuvwxyz0123456789" // length 36

// Random index should be from 0 to 35
let randomIndex1 = Math.floor(Math.random() * chars.length);
let randomIndex2 = Math.floor(Math.random() * chars.length);
let randomIndex3 = Math.floor(Math.random() * chars.length);
let randomIndex4 = Math.floor(Math.random() * chars.length);

// Pick characters using the random indexes
let passwordCharacter1 = chars[randomIndex1];
let passwordCharacter2 = chars[randomIndex2];
let passwordCharacter3 = chars[randomIndex3];
let passwordCharacter4 = chars[randomIndex4];

// Join all 4 characters using a template literal
let password = passwordCharacter1 + passwordCharacter2 + passwordCharacter3 + passwordCharacter4;
// let password = `${passwordCharacter1}${passwordCharacter2}${passwordCharacter3}${passwordCharacter4}`;

// Print the random password
console.log(password); 

console.log("<-------------------- Q26 ------------------------------------>")
//Q26 --> BONUS (MINI PROJECT - USERNAME & EMAIL GENERATOR) ->
//        Given the details below :
//        let firstName = "Siddhant"
//        let lastName = "Gadakh"
//        a) generate a username -> first 3 letters of firstName (lowercase)
//           + first 3 letters of lastName (lowercase) + a random 2-digit number (10 to 99)
//           Example -> "sidgad73"
//        b) generate the email -> username + "@gmail.com"
//        c) print a small ID CARD in EXACTLY this format (use template literals) :
//           Name    : Siddhant Gadakh
//           User ID : sidgad73
//           Email   : sidgad73@gmail.com
//        HINT -> slice() for the name parts, golden formula for the random number,
//        toLowerCase() for the username, template literal to join everything.

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
// let userId = `${firstPart}${lastPart}${randomNumber}`;

// Generate email using + operator
let email = userId + "@gmail.com";
// let email = `${userId}@gmail.com`;

// Print ID CARD 
console.log(` 
Name    : ${firstName} ${lastName} 
User ID : ${userId} 
Email   : ${email} 
`);

// console.log("Name : " + firstName + " " + lastName);
// console.log("User ID : " + userId);
// console.log("Email : " + email); 

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================