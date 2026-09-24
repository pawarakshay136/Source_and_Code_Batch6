// ============================================
// 05_ASSIGNMENT -> TOPIC : JS DATA TYPE CONVERSION (+ revision of datatypes & numbers)
// BASED ON : LECTURE/05_JS_DataType_Conversion.js  +  THEORY_NOTES/05_JS_DataType_Conversion.md
//
// HOW TO RUN : open terminal -> node 05_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : BASICS -------------------

//Q1 --> let strTen = "10"
//       let numTen = 10
//       Check if the typeof strTen is EXACTLY equal to typeof numTen.
//       Then convert strTen to a number and check again. Print both results.
//       HINT -> typeof strTen === typeof numTen  -> what comes first time ?
//       after Number(strTen) what changes ?

console.log("<-------------------- Q1 ------------------------------------>") 

// Answer
// false
// 10
// true

let strTen = "10"
let numTen = 10

console.log(typeof strTen === typeof numTen) // false
console.log(Number(strTen)) // 10 = number
console.log(typeof Number(strTen) === typeof numTen) // true // compares VALUE + DATATYPE

console.log("<-------------------- Q2 ------------------------------------>")

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?

// Output
// 0
// 0
// NaN
// 1
// 0

console.log(Number(""))         // 0
console.log(Number(null))       // 0
console.log(Number(undefined))  // Nan NaN = Not a number
console.log(Number(true))       // 1 boolean (true = 0)
console.log(Number(false))      // 0 boolean (false =)


console.log("<-------------------- Q3 ------------------------------------>")

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.

// Output
// 53841
// 53841.5135
// 12
// 12.9
// NaN = Not a number

console.log(parseInt("53841.5135")) // string to integer
console.log(parseFloat("53841.5135")) // string to decimal number
console.log(parseInt("12.9abc"))  // string to integer (no decimals)
console.log(parseFloat("12.9abc")) // string to decimal number (stops at the first invalid character)
console.log(parseInt("abc12.9")) // string to integer (no decimals)


console.log("<-------------------- Q4 ------------------------------------>")

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)

// Output
// NaN 
// number

console.log(Number("ASDFGHJKMNBVC"))
console.log(typeof Number("ASDFGHJKMNBVC"))
// NOTE -> you CANNOT convert letters/words into a number.
// if the string is not a valid number, the result is NaN (typeof NaN is still "number")

console.log("<-------------------- Q5 ------------------------------------>")

//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

let number = 7020400749

// a) convert it to a string using String() and print the typeof
console.log(String(number)) 
console.log(typeof String(number))

// b) convert it to a string using toString() and print the typeof
console.log(number.toString())
console.log(typeof number.toString())

// String() works even on null/undefined
// but .toString() gives an ERROR on null and undefined (they have no methods)
// console.log(String(null))     // "null"
// console.log(null.toString())
// Error = Cannot read properties of null


console.log("<-------------------- Q6 ------------------------------------>")

//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.

// Output:
// true
// false
// false
// true 

console.log(Boolean("hello")) // true  - string (non empty string = true)
console.log(Boolean(""))      // fales - empty string
console.log(Boolean(0))       // false - 0 is false // one of ⭐ the 6 FALSY
console.log(Boolean(100))     // true  - any non zero number is true

// ⭐ The 6 FALSY values are
// 1) fales 
// console.log(Boolean(false))
// 2) 0
// console.log(Boolean(0)) 
// 3) "" (empty string)
// console.log(Boolean(""))         
// 4) null
// console.log(Boolean(null))       
// 5) undefined
// console.log(Boolean(undefined)) 
// 6) NaN (Not a Number)
// console.log(Boolean(NaN))  


// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------


console.log("<-------------------- Q7 ------------------------------------>")

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.

// Output:
// 10
// 55
// 0
// 0
// 25
// 1 

console.log(5 + 5)     // number + number -> arithmetic
console.log(5 + "5")   // number + string -> concatination 
console.log("5" - 5)   // string - number -> subtraction
console.log(5 - "5")   // number - string -> subtraction
console.log("5" * 5)   // string * number -> multiplication
console.log("5" / 5)   // string / number -> division

// Reason:
// With + = number + number works as normal arithmetic
// If either side is a string, + joins the values (concatenation)
// With - * / %, a string is converted to a number first then the operation is performed

console.log("<-------------------- Q8 ------------------------------------>")

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.

// Output:
// 4
// 5
// 5true
// 5false

// Booleans in maths → true = 1, false = 0
console.log("5" - true)   // 4   -> true becomes 1  -> 5 - 1
console.log("5" - false)  // 5   -> false becomes 0 -> 5 - 0
console.log("5" + true)   // "5true"  -> + sees a string -> CONCAT
console.log("5" + false)  // "5false" -> + sees a string -> CONCAT


console.log("<-------------------- Q9 ------------------------------------>")

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.

// Output
// 105
// 5
// 11
// 0

console.log("10" + "5")  // string + string  ->  CONCAT
console.log("10" - "5")  // string - string  ->  subtraction 
console.log(1 + "1")     // number + string  ->  CONCAT
console.log(1 - "1")     // number - string  ->  subtraction

// - * / %, a string is converted to a number first then the operation is performed

console.log("<-------------------- Q10 ------------------------------------>")

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.

// Output:
// 5
// 5.5
// NaN
// number

console.log(+"5");       // 5
console.log(+"5.5");     // 5.5
console.log(+"abc");     // NaN (Not a Number)
console.log(typeof +"5"); // number

// Reason:
// The UNARY + trick ⭐ (interview favourite)
// Putting + before a string converts it to a number — the fastest way

console.log("<-------------------- Q11 ------------------------------------>")

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?

// Output:
// true
// false
// true
// false

console.log(isNaN(Number("hello")))  //  true
console.log(isNaN("123"))            //  false
console.log(isNaN("hello123"))       //  true
console.log(NaN === NaN)             //  false // NaN is not equal to anything, not even to itself — that is why we use isNaN() to detect it.

// isNaN() = checking for NaN
// Returns boolean
// isNaN() converts the value into a number first
// if conversion fails, it becomes NaN
// if the result is NaN, isNaN() = true
// if the result is not NaN, isNaN() = false
// We use isNaN() to detect NaN


// ------------------- SECTION C : LOGIC BUILDING -------------------

console.log("<-------------------- Q12 ------------------------------------>")

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?

// Output:
// false
// 10
// number

let priceStr = "9.8"
console.log(parseFloat(priceStr) === 10)  // false
console.log(Math.round(parseFloat(priceStr))) // round 9.8 -> 10
console.log(typeof Math.round(parseFloat(priceStr))) // number

// Solution with creating variable
// let price = Math.round(parseFloat(priceStr))
// console.log(price) = 10
// console.log(typeof price) = number

console.log("<-------------------- Q13 ------------------------------------>")

//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).

// Output:
// 9876543210
// number

let mobileStr = "  9876543210  "

console.log(Number(mobileStr.trim())) // 9876543210
console.log(typeof Number(mobileStr.trim())) // number

console.log("<-------------------- Q14 ------------------------------------>")

//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).

// Output:
// 36.00
let amountStr = "199.99"
console.log((Number(amountStr) * 0.18).toFixed(2))

console.log("<-------------------- Q15 ------------------------------------>")

//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.

// Output:
// Your otp is : 483920
// Length of the string is :-  6

let otp = 483920
console.log(`Your otp is : ${String(otp)}`)
console.log("Length of the string is :- ",String(otp).length)

console.log("<-------------------- Q16 ------------------------------------>")

//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)

// Output:
// true
// 15
// Extracted username is :-  siddhant.gadakh
// Extracted username is :-  siddhant.gadakh

let email = "siddhant.gadakh@gmail.com"

// a) check if the email contains "@" (print true/false)
console.log(email.includes("@")) // true

// b) find the index of "@"
console.log(email.indexOf("@")) // 15

// c) extract the username part (everything BEFORE the @) using slice()
console.log("Extracted username is :- ", email.slice("0","15"))
console.log("Extracted username is :- ", email.slice("0", email.indexOf("@")))

console.log("<-------------------- Q17 ------------------------------------>")

//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?

// Output:
// 510
// -5
// CORRECT Sum is :-  15
// Diffrence is :-  -5

let val1 = "5"
let val2 = "10"
console.log(val1 + val2)  // 510  -> string + string -> CONCAT
console.log(val1 - val2)  // -5   -> string - string -> subtract 

console.log("CORRECT Sum is :- ", Number(val1) + Number(val2))  // 15
console.log("Diffrence is :- " , Number(val1) - Number(val2))   // -5

console.log("<-------------------- Q18 ------------------------------------>")

//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.

// TRUTHY value = true
console.log(Boolean("24"))    // true
console.log(Boolean("True"))  // true
console.log(Boolean("False")) // true
console.log(Boolean([]))      // true
console.log(Boolean({}))      // true
console.log(Boolean("0"))     // true

// TRUTHY value = false
console.log(Boolean(false))     // false
console.log(Boolean(0))         // false
console.log(Boolean(""))        // false
console.log(Boolean(null))      // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN))       // false
console.log(Boolean())          // false


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

console.log("<-------------------- Q19 ------------------------------------>")

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?

// Answer:
// typeof NaN === "number" because NaN is a special value of the number data type
// that represents a failed or invalid number operation

// NaN === NaN is false because
// NaN is not equal to anything, not even to itself
// that is why we use isNaN() to detect it

// The correct way to detect NaN is:
console.log(typeof NaN) // number
console.log(NaN === NaN) // false
console.log(isNaN(NaN)) // true

console.log("<-------------------- Q20 ------------------------------------>")

//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.

// Answer:
// "" is an empty string so it is a real value but contains nothing
// undefined means no value has been assigned
// Number("") gives 0 because the empty string is converted to 0
// Number(undefined) gives NaN because undefined cannot be converted to a valid number

console.log("<-------------------- Q21 ------------------------------------>")

//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !

// Answer:
// parseInt() cuts the decimal part and moves towards ZERO
// Math.floor() rounds DOWN to the next lower integer

// For positive numbers, both give 12
// But for negative numbers, they give different results

// parseInt("-12.9") gives -12 because it cuts towards ZERO
// Math.floor(-12.9) gives -13 because it goes DOWN on the number line

console.log(parseInt("-12.9")) // -12
console.log(Math.floor(-12.9)) // -13


console.log("<-------------------- Q22 ------------------------------------>")

//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).

// Answer:
// Implicit conversion means JavaScript automatically converts the data type
// Example:
console.log("5" - 5) // 0

// Explicit conversion means we manually convert the data type
// Example:
console.log(Number("5")) // 5

// ------------------- SECTION E : BONUS CHALLENGE -------------------

console.log("<-------------------- Q23 ------------------------------------>")

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.

// Output:
// Sum : 30
// Difference : -10
// Product : 200

let numA = "10"
let numB = "20"

// convert string to numbers
let numberA = Number(numA)
let numberB = Number(numB)

// Calculation and Print
console.log("Sum : ", numberA + numberB)        // Sum : 30 
console.log("Diffrence : ", numberA - numberB)  // Difference : -10
console.log("Product : ", numberA * numberB)    // Product : 200

// console.log(`Sum : ${numberA + numberB}`) // Sum : 30
// console.log(`Difference : ${numberA - numberB}`) // Difference : -10
// console.log(`Product : ${numberA * numberB}`) // Product : 200

console.log("<-------------------- Q24 ------------------------------------>")

//Q24 --> BONUS (MINI PROJECT - TYPE INSPECTOR REPORT) ->
//        Declare one value of each type :
//        a string, a number, a boolean, undefined, and null.
//        Print a report in EXACTLY this format (use template literals + typeof) :
//           "abc"      -> string
//           123        -> number
//           true       -> boolean
//           undefined  -> undefined
//           null       -> ???
//        HINT -> one line will SURPRISE you. typeof null is NOT "null".
//        write the real output + explain in comments (famous JS interview quirk!).

// Output:
// "Akshay A Pawar"      -> string
// 24        -> number
// true       -> boolean
// undefined  -> undefined
// null       -> object

let str_1 = "Akshay A Pawar"
let num_1 = 24
let isIndian = true
let und_1 
let nullValue = null

console.log(
    `"${str_1}"      -> ${typeof str_1}
${num_1}        -> ${typeof num_1}
${isIndian}       -> ${typeof isIndian}
${und_1}  -> ${typeof und_1}
${nullValue}       -> ${typeof nullValue}`
)

// typeof null is "object", not "null".
// This is a famous JavaScript quirk.
// null represents an intentional absence of a value,
// but typeof null returns "object"

console.log("<-------------------- End ------------------------------------>")

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT.js
// ============================================