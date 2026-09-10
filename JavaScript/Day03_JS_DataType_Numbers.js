// Day03 - 09th September 2026, Wednesday

// NUMBER --> this data represents all the numeric values 
// all the numeric values in js are numbers ( intergers , demical/floating )

//EXAMPLES 
let interger = -200
let floating_number = 250.12254465186465318964861

console.log(typeof interger)
console.log(typeof floating_number)

// WHY DO USE IN JS OR DAY 
// WE USE Numbers in js to perform arthimtiac operations and logical operation


// IN JS -> ANY TYPE DATA THAT WE HAVE WILL HAVE 2 THINGS. 
// METHODS  -> METHODS are the commands used to perform various operations 
// PROPERTY -> inhereted values or some key things

// HUMANS -->
// METHOD -> operations (A DAY JOB , WALKING , CODING)
// PROPERTY -> NAME GIVEN US ,  HEIGHT , WEIGHT


//CAR->
// METHOD - > OPERATIONS ( DRIVE, STARTED , SPEED RATIO)
// PROTERY -> inhereted value (CARTYPE , ENGINE TYPE , FUEL TYPE , color )


//NOTE FOR NUMBER DATATYPE  :- EVERY OPERTAION/METHOD PERFOMED ON NUMBER WILL HAVE A PREFIX ATTACHED .Math 


/** 
 * Math.floor() --> it rounds down the floating number to its nearest lower interger ( will convert floating into  lowerinterger)
 * 
 * //example 
 * let num_1 = 10.235674687
 * //after method 
 * 10
 * 
 * REAL EXAMPLE
 */

let num_1 = 99.99

console.log(Math.floor(num_1))
// output recived -> 99


/** 
 * Math.ceil() --> it rounds up the floating number to its nearest higher interger ( will convert floating into  higer interger)
 * 
 * //example 
 * let num_1 = 10.12
 * //after method 
 * 11
 * 
 * REAL EXAMPLE
 */
let num_2 = 10.2
console.log(Math.ceil(num_2))
// output recived -> 11


/**
 * Math.round() -> rounds the number to nearest nearest interger 
 * 
 * conditions if it is 
 * 0.5 -0.9-- > up --> ceil  
 * 0- 0.4 --> down -->floor
 * 
 * Example
 */


let num_3 = 20.2
let num_4 = 20.5

console.log(Math.round(num_3)) // 20 --> rounds down
console.log(Math.round(num_4)) // 21 --> round up 

/**
 * .toFixed()-> this formats the number to given decimal point 
 * 
 * 10.659821
 * 
 * // out -> 10.6
 */

let num_5 = 10.658912355

console.log(num_5.toFixed(2)) //10.66

console.log(num_5.toFixed(1)) //10.7
console.log(num_5.toFixed(4))//10.6589


/**
 Math.random()-> this method is used to generate a random number form 0  to 0.9999
 
 
 WHY IS USED  and WHY IS THIS METHOD ASKED IN INTERVIEW
 
 // IT USED TO GENERATE RANDOM TESTDATA 
 // IT USED TO GENARTE THE EDGE OR NON-PERDICTABLE 
 // IT ALSO USED FOR ENCRYPTION OF CREDINATILS 

 */


console.log(Math.random())
/**
 * output 1 - 0.3714080913906401
 * output 2 - 0.02345965359106006
 * output 3 - 0.8787715496647563
 */


// EXAMPLE  -> 

// generate any random number between 0-100

console.log(Math.random()*100) // lowest number 0 and highest number is 99.9999

// now convert it into interger 
/**
 * ceil - lower 1 and highest will be 100
 * floor -
 * round - lower number sometimes may become  1 and higer may become 99
 * tofixed() - this not conssited beacuse of the difference in point ( this will behave like round)
 * 
 */

//
console.log(Math.round(Math.random()*100)) 

// 10th September 2026, Thursday  8.30 PM to 9.30 PM

// Q1 Create a random mobile number 

// DATA that we get form the question - > 
// assuming the phone number is indian - >  digits 
// indian numbers starts with 6 7 8 9
// now we will spilt the phone number in 2 parts 
// firstdigits = 6 , 7 ,8 ,9 
// reaming = 
let firstDigit = Math.floor(Math.random()*4) + 6  
// 0-0.9999
// 0-4.9999
//0-4

console.log(firstDigit)
// now i have starting number 
let Reamining_Numbers = Math.floor(Math.random()*1000000000)
// math. random -> 0-0.9
// if multipled by 10 --> 0-9.999
// 100 - > 0-99.99
//1000->999.9999
console.log(firstDigit,Reamining_Numbers)
//6 775510257
//6 964722464


//2 PROBLEM - generate a program to simulate the the throw of dice 

// generate a random number between 1 and 6 

let dice_1 = Math.floor(Math.random()*6)+1

//0 -0.9999

//0-5.99999  -
//after round 
// 0-6 

// lowest - > 0*6 =>0
// highest -> 0.9 *6 => 5.4

// 0 -5

//1 -6

console.log(dice_1)


// 3general formula to tackel math.random problem 


// genearte min between  max 


//Math.floor(Math.random()*(max-min+1)+min)


//example-->

// genrate a number between 50 - 175 

let Partical_number = Math.floor(Math.random()*(175-50+1)+50)

console.log(Partical_number)



//4  generate a random number between 2.3 and 7.5

let decimal_number = Math.random()*(7.5-2.3)+2.3

console.log(decimal_number.toFixed(1))

//5.3498627871592355

//5 generate a number between 0 - 100 but it should be in progessive 

let Five_num = Math.floor(Math.random()*21)*5

console.log(Five_num)


//6 genarte a random adhar number 

/*
Aadhaar Number 
StructureLength: Exactly 12 digits
Format: Grouped in blocks of four digits (e.g., XXXX XXXX XXXX).
*/

////Math.floor(Math.random()*(max-min+1)+min)

let digit_1 = Math.floor(Math.random()*(10000-1000)+1000)
let digit_2 = Math.floor(Math.random()*(10000-1000)+1000)
let digit_3 = Math.floor(Math.random()*(10000-1000)+1000)

console.log(digit_1, " " ,digit_2, " ", digit_3)



console.log(digit_1, " " ,digit_1, " ", digit_1)

// Notes
/*

1. Math.random()
   - Generates a random decimal number.
   - Range: 0 (inclusive) to less than 1 (exclusive).
   - Example: 0.2456, 0.7891, etc.

2. Math.floor()
   - Removes the decimal part of a number.
   - Converts a decimal number into an integer.

3. GENERATING RANDOM INTEGERS

   Formula:
   Math.floor(Math.random() * (max - min + 1)) + min

   This formula generates a random integer
   between MIN and MAX (both inclusive).

4. PRACTICAL EXAMPLES COVERED

   - Generate a random Indian mobile number.
   - Simulate the throw of a dice (1 to 6).
   - Generate a random integer between 50 and 175.
   - Generate a random decimal number between 2.3 and 7.5.
   - Generate progressive numbers from 0 to 100 in multiples of 5.
   - Generate dummy 12-digit test numbers in groups.

====================================================
IMPORTANT CONCEPT:

Math.random() gives:
0 <= random number < 1

Example for dice:

Math.random() * 6
Range: 0 to 5.999...

Math.floor()
Range: 0 to 5

+ 1
Final Range: 1 to 6

====================================================
*/ 