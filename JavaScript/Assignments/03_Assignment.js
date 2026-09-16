// ============================================
// 03_ASSIGNMENT -> TOPIC : JS DATA TYPE - NUMBERS
// Math.floor / Math.ceil / Math.round / toFixed / random
// BASED ON : LECTURE/03_JS_DataType_Numbers.js
//            + THEORY_NOTES/03_JS_DataType_Numbers.md
//
// HOW TO RUN : open terminal -> node 03_ASSIGNMENT.js
//
// RULES -> for every "predict the output" question,
// FIRST write your answer as a comment, THEN write the code,
// run it and verify.
// Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : BASICS -------------------

//Q1 --> Declare one integer variable and one floating (decimal) variable of your choice.
//       Print both values AND their datatypes using typeof.
//       HINT -> in JS there is NO separate int/float. what does typeof give for BOTH ?

// In JS there is no separate int / float → integers and decimals (floating point) are ALL of type number.

let number_100 = 100 // number
let floatingNumber = 25.50 // number

console.log(number_100) // 100
console.log("Data type of number_100 is:- "+typeof number_100);

console.log(floatingNumber); //25.50
console.log("Data type of floatingNumber is:- "+typeof floatingNumber);

// 100
// Data type of number_100 is:- number
// 25.5
// Data type of floatingNumber is:- number


//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
//       HINT -> which method formats decimals ? and what datatype does it RETURN ?
//       (getting the datatype wrong here is the most common mistake students make) 

let price = 499.5;
console.log(price.toFixed(2)); // 499.50 = formats number to given number of decimal points
console.log("Data Type is:- "+ typeof price.toFixed(2)); // returns a string

// Answer
// 499.50
// Data Type is:- string


//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
//       HINT -> floor = down, ceil = up, round = nearest (.5 and above goes UP)

// Answer 
// 10 11 10
// 10 11 11 
// 10 11 11

console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2)) // 10 11 10
console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5)) // 10 11 11
console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9)) // 10 11 11


//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.

// Answer
// 1  Math.round() rounds the number to the nearest integer 
//    .toFixed() formats the number to a given number of decimal points

// 2  Math.round() uses the Math prefix 
//    toFixed() is used directly with a number

// 3  Math.round() returns a number
//    toFixed() returns a string

// 4   console.log("Math round:- "+ Math.round(10.658)) // gives 11
//     console.log(10.658.toFixed(2)) // gives 10.66 


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
//       HINT -> floor and ceil do NOT care about "closeness". floor always goes to the LOWER
//       integer, ceil always goes to the HIGHER integer. Think on a number line, not by size. 

// Answer
// -5
// -4
// -5 

console.log(Math.floor(-4.2)); // lower integer = -5 
console.log(Math.ceil(-4.8));  // higher integer = -4 
console.log(Math.round(-4.5)); // round to nearest integer = -5



//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?

let price1 = 99.99
console.log(Math.floor(price1), Math.ceil(price1), Math.round(price1), price1.toFixed(1))

// Answer 
// 99 100 100 100.0 
// console.log(Math.floor(price1)) // 99 = nearest lower integer
// console.log(Math.ceil(price1)) // 100 = round up to its nearest higher integer 
// console.log(Math.round(price1)) // 100 = nearest integer
// console.log(price1.toFixed(1)) // 100.1 = formats number to given number of decimal points


//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2))
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?

let x = 10.658912355
console.log(x.toFixed(2)) // Formats the number to 2 decimal place i.e. 10.65
console.log(x) // print 

// Answer
// 10.66
// 10.658912355


//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//       b) what is the LARGEST value it can ever print ?
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...

console.log(Math.floor(Math.random() * 10) + 1);

// Answer
// a) Smallest value = 1 
// b) Largest value = 10 
// c) Math.random() cannot return exactly 1
// Math.random() gives value from 0 up to but not including 1
// After multiplying by 10 the value can be from 0 up to 9.999... 
// Math.floor() gives 0 to 9 
// Adding 1 gives 1 to 10


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)

console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))

// Answer
// 10.6610.66
// toFixed() = formats the number to a given number of decimal points
// 10.658912355.toFixed(2) = 10.66 (n = 2)
// + = concatenation 
// 10.658912355.toFixed(2) = 10.66 
// final output : 10.6610.66  (if we use + " " + then o/p is = 10.66 10.66)
// toFixed() returns a string


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

let total = dice1 + dice2;

console.log("Dice 1 :- " + dice1);
console.log("Dice 2 :- " + dice2);
console.log("Total :- " + total);

if (total === 12) {
  console.log("DOUBLE SIX!"); 
} 

// Answer
// Dice 1 :-4
// Dice 2 :-2
// Total :-6

//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)

//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.

//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)

//Q14 --> Write a program to generate a random 4-digit OTP.
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999

//Q15 --> Write a program to generate a random INDIAN mobile number.
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
//        HINT -> split in 2 parts like the lecture : firstDigit (6-9) + remaining 9 digits.
//        Challenge -> how do you JOIN two numbers so they print as ONE string, not "6 987654321" ?

//Q16 --> Given the number below, write code to round it to 2 decimal places
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
//        Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5)
//        Then answer : why is Math.floor(-4.2) NOT -4 ?
//        HINT -> "-4.2 rounded down" means moving AWAY from zero, not towards it.

console.log(Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5))

 // Answer: 
 // -5 -4 -4
 // Math.floor(-4.2) -> -5 = down to its nearest lower integer = -5
 // Math.ceil(-4.8) -> -4 = up to its nearest higher integer = -4
 // Math.round(-4.5) -> -4  = round to nearest integer = -4

 // Why is Math.floor(-4.2) NOT -4? 
 // because Math.floor() always goes to the lower integer. 
 // On a number line
 // -5 <- -4.2 -> -4 
 // lower integer is -5. 
 // Therefore Math.floor(-4.2) gives -5



//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
//        Write in comments : minimum value, maximum value, and whether it can ever reach the maximum.
//        Also mention any 3 real-world uses of Math.random() (from the lecture).

Math.random()
// Answer: 
// Math.random() output range
// Minimum value -> 0 
// Maximum value -> less than 1 
// Math.random() can return 0
// but it cannot return exactly 1 

// 3 real-world uses of Math.random() (from the lecture).
// 1) It is used to generate random test data
// 2) It is used to generate edge / non-predictable cases
// 3) It is also used for encryption of credentials (tokens, OTPs, keys)



//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
//        console.log(0.1 + 0.2)
//        console.log(0.1 + 0.2 === 0.3)
//        HINT -> JS follows IEEE-754 (binary floating point). some decimal numbers CANNOT be
//        stored exactly in binary. How would you FIX the comparison ? (one line, use a method
//        you learned in this lecture)

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

// Answer: 
// 0.30000000000000004 
// false
// Reason Javascript uses floating point representation
// Some decimal numbers cannot be represented exactly
// we can use toFixed()  
//(0.1 + 0.2).toFixed(1) === "0.3" // This compares the formatted values as strings
// console.log(0.1 + 0.2); 
// console.log(0.1 + 0.2 === 0.3); // false
// console.log((0.1 + 0.2).toFixed(1) === "0.3"); // true



// ------------------- SECTION E : BONUS CHALLENGE -------------------


//Q20 --> BONUS -> generate a random Aadhaar number in the EXACT format "XXXX XXXX XXXX".
//        Rules -> 12 digits total, grouped in 3 blocks of 4 digits with a space between blocks.
//        Print it as one single string. Example -> "4821 9057 3364"
//        HINT -> each block must be a 4-DIGIT number (1000 to 9999) so it never shows 3 digits,
//        then JOIN the 3 blocks with spaces.


// format "XXXX XXXX XXXX"
let block_1 = Math.floor(Math.random()*(10000-1000)+1000)
let block_2 = Math.floor(Math.random()*(10000-1000)+1000)
let block_3 = Math.floor(Math.random()*(10000-1000)+1000)
console.log(block_1," ",block_2," ",block_3)

// Answer
// 3303   8558   4563


//Q21 --> BONUS (MINI PROJECT - BILLING RECEIPT) ->
//        A customer buys 3 items with these prices : 199.99, 449.50, 89.75
//        a) calculate the total bill
//        b) apply a random discount between 5% and 15% on the total (use randomBetween logic)
//        c) calculate the final amount after discount
//        d) print the receipt in EXACTLY this format (use toFixed) :
//           Total      : Rs. 739.24
//           Discount   : 10.0%
//           Final Bill : Rs. 665.32
//        HINT -> discount = total * (randomPercent / 100). Round at the END, not in between.

let item_1 = 199.99
let item_2 = 449.50
let item_3 = 89.75

// a) Calculate total bill
let totalBill = item_1 + item_2 + item_3

// b) Apply random discount between 5% and 15%
// want random discount so Math.random()
// 5 to 15 total 11 numbers so *11
// Math.floor() for whole number
// Math.floor(Math.random() * 11) give range 0–10 
// we want 5–15 so +5
let randomPercent = Math.floor(Math.random() * 11) + 5

let discount = totalBill * (randomPercent / 100)

// c) Calculate final amount
let finalAmount = totalBill - discount

// d) Print receipt
console.log("Total      : Rs. " + totalBill.toFixed(2))
console.log("Discount   : " + randomPercent.toFixed(1) + "%")
console.log("Final Bill : Rs. " + finalAmount.toFixed(2))

// Answer
// Total      : Rs. 739.24
// Discount   : 15.0%
// Final Bill : Rs. 628.35