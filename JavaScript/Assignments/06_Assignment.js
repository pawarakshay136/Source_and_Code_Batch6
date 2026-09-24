// ============================================
// 06_ASSIGNMENT -> TOPIC : JS OPERATORS (+ revision of datatypes, numbers & strings)
// BASED ON : LECTURE/06_JS_Operators.js  +  THEORY_NOTES/06_JS_Operators.md
//
// HOW TO RUN : open terminal -> node 06_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : ARITHMETIC + ASSIGNMENT -------------------

console.log("<-------------------- Q1 ------------------------------------>") 

//Q1 --> let a = 10
//       let b = 3
//       Print the result of ALL 6 arithmetic operators on a and b :
//       + - * / % **  (one console.log each, with the expected answer in comments)
//       HINT -> remember : / does NOT cut decimals in JS.

// Output:
// 13
// 7
// 30
// 3.3333333333333335
// 1
// 1000

let a = 10
let b = 3

console.log(a + b) // 13
console.log(a - b) // 7
console.log(a * b) // 30
console.log(a / b) // 3.3333333333333335
console.log(a % b) // 1
console.log(a ** b) // 1000

// + is used for addition
// - is used for subtraction
// * is used for multiplication
// / is used for division
// % gives the remainder
// ** is used for power

console.log("<-------------------- Q2 ------------------------------------>") 

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.

// Output:
// 1
// 1
// 0
// 16

console.log(5 % 2) // 1
console.log(10 % 3) // 1
console.log(10 % 5) // 0
console.log(2 ** 4) // 16

// % gives the remainder
// ** is used to calculate power

console.log("<-------------------- Q3 ------------------------------------>") 

//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"

// Output:
// odd
// even
// even

console.log(15 % 2 === 0 ? "even" : "odd") // odd
console.log(22 % 2 === 0 ? "even" : "odd") // even
console.log(0 % 2 === 0 ? "even" : "odd") // even

// % can be used to check even and odd
// 0 remainder means even
// Ternary gives output based on the condition


console.log("<-------------------- Q4 ------------------------------------>") 

//Q4 --> let score = 10
//       Apply these ONE BY ONE, and predict the value of score AFTER EACH STEP
//       (write all predictions in comments BEFORE running) :
//       score += 5
//       score -= 3
//       score *= 2
//       score /= 4
//       score %= 3
//       Then run and confirm. If any prediction was wrong, write the reason.
//       HINT -> translate each shortcut to its long way, step by step.
//       (remember the lecture mistake : never apply the long way AND the shortcut together!)

// Output:
// 15
// 12
// 24
// 6
// 0

let score = 10

score += 5
console.log(score) // 15

score -= 3
console.log(score) // 12

score *= 2
console.log(score) // 24

score /= 4
console.log(score) // 6

score %= 3
console.log(score) // 0

// += adds a value
// -= subtracts a value
// *= multiplies a value
// /= divides a value
// %= gives and assigns the remainder 

// ------------------- SECTION B : PREDICT THE OUTPUT (COMPARISON + LOGICAL) -------------------

console.log("<-------------------- Q5 ------------------------------------>") 

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3)
//       console.log(4 >= 3)
//       console.log(4 < 3)
//       console.log(4 <= 3)
//       console.log(4 == 4)
//       console.log(4 === 4)
//       console.log(4 != 4)
//       console.log(4 !== 4)
//       console.log(4 != "4")
//       console.log(4 == "4")
//       console.log(4 === "4")
//       HINT -> == compares only VALUE, === compares VALUE + DATATYPE.
//       != and !== are their opposites.

// Output:
// true
// true
// false
// true
// true
// true
// false
// false
// false
// true
// false

console.log(10 > 5)  // true
console.log(10 >= 10) // true
console.log(5 > 10)  // false
console.log(5 < 10) // true
console.log(10 <= 10) // true
console.log(10 == "10") // true
console.log(10 === "10") // false
console.log(10 != 10) // false
console.log(10 !== 10) // false
console.log(10 !== "10") // true
console.log(10 < 5) // false

// Comparison operators return true or false
// == compares value
// === compares value and datatype
// != means not equal
// !== means strict not equal

console.log("<-------------------- Q6 ------------------------------------>") 

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.

// Output:
// true
// false
// true
// false
// false
// true
// true

console.log(10 > 5 && 20 > 10) // true
console.log(10 > 5 && 20 < 10) // false
console.log(10 > 5 || 20 < 10) // true
console.log(10 < 5 || 20 < 10) // false
console.log(!(10 > 5)) // false
console.log(!(10 < 5)) // true
console.log(true || false) // true

// && needs both conditions to be true
// || needs at least one true condition
// ! gives the opposite result

console.log("<-------------------- Q7 ------------------------------------>") 

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 5
//       console.log(++a)
//       console.log(a)
//       let b = 5
//       console.log(b++)
//       console.log(b)
//       let c = 5
//       console.log(--c)
//       console.log(c)
//       HINT -> PRE changes the value BEFORE using it, POST uses the OLD value first.

// Output:
// 6
// 6
// 5
// 6
// 4
// 4

let a1 = 5

console.log(++a1) // 6
console.log(a1) // 6

let b1 = 5

console.log(b1++) // 5
console.log(b1) // 6

let c1 = 5

console.log(--c1) // 4
console.log(c1) // 4

// ++a increases first and then gives the value
// a++ gives the old value and then increases
// -- decreases the value by 1


console.log("<-------------------- Q8 ------------------------------------>") 

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.

// Output:
// true
// false
// false

console.log("10" == 10) // true
console.log("10" === 10) // false
console.log(typeof "10" === typeof 10) // false

// == compares value
// === compares value and datatype
// "10" is a string and 10 is a number

console.log("<-------------------- Q9 ------------------------------------>") 

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.

// Output:
// true
// true

console.log("b" > "a") // true
console.log("apple" < "banana") // true

// Strings can also be compared
// JavaScript compares the character values

// ------------------- SECTION C : LOGIC BUILDING -------------------

console.log("<-------------------- Q10 ------------------------------------>") 

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".

// Output:
// Age difference is : 4 years
// You are older

let myAge = 21
let yourAge = 25

console.log(`Age difference is : ${yourAge - myAge} years`)
// Age difference is : 4 years

console.log(myAge > yourAge ? "I am older" : "You are older")
// You are older

// Template literals can contain calculations using ${}
// Ternary is used for two possible outputs 

console.log("<-------------------- Q11 ------------------------------------>") 

//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...

// Output:
// can drive

let birthYear = 2004
let age = 2026 - birthYear

console.log(age >= 18 ? "can drive" : "cannot drive")
// can drive

// Age can be calculated using current year - birth year
// Ternary checks the condition and gives the result

console.log("<-------------------- Q12 ------------------------------------>") 

//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0

// Output:
// even

console.log(2024 % 2 === 0 ? "even" : "odd") // even

// % gives the remainder
// If remainder is 0 after dividing by 2, the number is even 


console.log("<-------------------- Q13 ------------------------------------>") 

//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).

// Output:
// true
// first name is longer

let firstName = "siddhant"
let lastName = "gadakh"

console.log(firstName.length > lastName.length) // true
console.log(firstName.length > lastName.length ? "first name is longer" : "last name is longer")
// first name is longer

// .length gives the number of characters
// siddhant has 8 characters
// gadakh has 6 characters

console.log("<-------------------- Q14 ------------------------------------>") 

//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).

// Output:
// true

let word1 = "python"
let word2 = "jargon"

console.log(word1.includes("on") && word2.includes("on")) // true

// includes() checks if a value exists inside a string
// && checks both conditions

console.log("<-------------------- Q15 ------------------------------------>") 

//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).

// Output:
// Area of triangle is : 30

let base = 10
let height = 6

console.log(`Area of triangle is : ${(base * height) / 2}`)
// Area of triangle is : 30

// Area of triangle = base * height / 2


console.log("<-------------------- Q16 ------------------------------------>") 

//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.

// Output:
// Area : 96
// Perimeter : 40

let length = 12
let width = 8

console.log(`Area : ${length * width}`)
// Area : 96

console.log(`Perimeter : ${2 * (length + width)}`)
// Perimeter : 40

// Area = length * width
// Perimeter = 2 * (length + width)


console.log("<-------------------- Q17 ------------------------------------>") 
//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.

// Output:
// Area : 153.94
// Circumference : 43.98

let radius = 7

console.log(`Area : ${(Math.PI * radius ** 2).toFixed(2)}`)
// Area : 153.94

console.log(`Circumference : ${(2 * Math.PI * radius).toFixed(2)}`)
// Circumference : 43.98

// Circle area = PI * radius ** 2
// Circumference = 2 * PI * radius
// toFixed(2) gives 2 digits after decimal


console.log("<-------------------- Q18 ------------------------------------>") 
//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.

// Output:
// Random value

let salary = 25000

salary += 5000
salary *= 0.9
salary += Math.floor(Math.random() * 1001) + 500

console.log(salary)

// += adds the value to salary
// *= can be used to update the salary
// Math.random() gives a random value
// Math.floor() removes the decimal part

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

console.log("<-------------------- Q19 ------------------------------------>") 

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.

// Output:
// = is assignment
// == is loose comparison
// === is strict comparison

// = assigns a value
// == compares value
// === compares value and datatype

console.log("<-------------------- Q20 ------------------------------------>") 

//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.

// Output:
// true
// true
// true

console.log("0" == 0) // true
console.log("" == 0) // true
console.log(null == undefined) // true

// == can automatically convert datatypes
// === checks value and datatype
// This is why === is generally preferred

console.log("<-------------------- Q21 ------------------------------------>") 

//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.

// Output:
// 12
// 7

let x = 5
let y = x++ + ++x

console.log(y) // 12
console.log(x) // 7

// x++ gives the old value and then increases
// ++x increases first and then gives the value
// 5 + 7 = 12

console.log("<-------------------- Q22 ------------------------------------>") 

//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?

// Output:
// 0
// 0
// 1

console.log(10 % 2) // 0
console.log(15 % 5) // 0
console.log(7 % 3) // 1

// % gives the remainder
// It can be used to check even and odd
// It can also check if a number is divisible by another number

console.log("<-------------------- Q23 ------------------------------------>") 

//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.

// Output:
// 14
// 20
// 9

console.log(2 + 3 * 4) // 14
console.log((2 + 3) * 4) // 20
console.log(10 - 4 % 3) // 9

// Brackets are calculated first
// * / % are calculated before + -
// This is called operator precedence

// ------------------- SECTION E : BONUS CHALLENGE -------------------

console.log("<-------------------- Q24 ------------------------------------>") 

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.

// Output:
// Before : 3 8
// After : 8 3

let a2 = 3
let b2 = 8

console.log("Before :", a2, b2)

a2 = a2 + b2
b2 = a2 - b2
a2 = a2 - b2

console.log("After :", a2, b2)

// values can be swapped without using a third variable
// addition and subtraction are used for swapping


console.log("<-------------------- Q25 ------------------------------------>") 

//Q25 --> BONUS (MINI PROJECT - SHOPPING BILL) ->
//        let price = 499
//        let quantity = 3
//        a) calculate the total (use *= on a total variable)
//        b) apply a 10% discount ONLY IF the total is more than 1000
//           (use a ternary to decide, then arithmetic to apply)
//        c) print the receipt in EXACTLY this format :
//           Price     : Rs. 499
//           Quantity  : 3
//           Total     : Rs. 1497.00
//           Discount  : Rs. 149.70
//           Final Bill: Rs. 1347.30
//        HINT -> ternary gives you the discount AMOUNT (0 or total * 0.1),
//        toFixed(2) for the money format (revision lecture 03).

let price = 499
let quantity = 3

let total = price
total *= quantity
// total = total * quantity

let discount = total > 1000 ? total * 0.1 : 0
let finalBill = total - discount

console.log("Price      :", price)
console.log("Quantity   :", quantity)
console.log("Total      :", total)
console.log("Discount   :", discount)
console.log("Final Bill :", finalBill)

// *= updates the total value
// Ternary checks if total is greater than 1000
// 10% discount is applied when the condition is true
// toFixed(2) shows 2 digits after decimal

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT.js
// ============================================