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