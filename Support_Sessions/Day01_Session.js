// Day01 Support Session - 10th September 2026, Thursday 7PM TO 8PM

// how run js file  ->

//1 step -> click on file you need to run 
//2 step -> open in intergated terimnial
//3 in terminal type  -> node filename.js

//how print in terminal

// in console print  hello world 
console.log("hello")

/*i have tor
pint my name */


// comment -> comments are the line written in code which are used to explain the code and this igonred by console/terminal

//use :-
//1 it will make your code readable
//2 it will make your code easy to maintain


// types ->
// 1 single line comment --> used 95 percent --> (//) --> it has the scope or range upto a single line

// example -> this is a single line comment 


/* 2 multi - comment -> used 5 % --> it can 
given 
in 
multiple line 

starting (/*   comment 


)

ending (*/


/*
comment rules  - code quality

1 use comment to explain the complex flow not simple flows 
2 avoid unwanted commenting ( comments which doesnt add value -> remove them )
3 keep comments updated with code changes 
4 comments should be short and clear understand 

*/




//VARIABLE -> In js Variables are used to store a value 


// IN JS WE HAVE 3 TYPES OF VARIABLES 

//LET
//VAR 
//CONST


/**
 * let -> let is used to delacre a vlaue that can be updated in the future 
 * 
 * example 
 * 
 */

let number_ten = 10
let number_five =5

console.log(number_ten)
console.log(number_five)

number_ten =100
number_five =500
console.log(number_ten)
console.log(number_five)


/*


/*
var -> var is used to delacre a vlaue that can be updated in the future 
example
*/
// var one = 1
// var two = 2

// console.log(one)
// console.log(two)


one = 11
console.log(one)
/*
const -> is used to delcare a constant variable

example
*/
const pi = 3.1423

console.log(pi)

// pi = 4
// console.log(pi)



//NOTE :- 


//LET AND CONST IS BLOCK SCOPE VARIABLE 
//VAR IS FUNCTIONAL SCOPE VARIABLE

// Explain varaibles in js 
// let difference let and var 

/**
 * QUALITY CODE IMPORVE 
 *
 * rules or follow 
 */


// 1 rule -> varaible name should not start with a number or symbol 

//example

//valid  -> let num_1 = 1
//invaild  -> let 1_num = 1
// invaild -> let %num = 1

//2 rule -> varaible name can only contain letters , number, underscore ( _ ), dollar sign $

//valid  -> let num_1 = 1
//invaild  -> let ^_num = 1
// invaild -> let number one  = 1

// let number_one = 1

// 3 rule -> varaibles are case senstive 
// NOTE -> JS IS CASE SENSTIVE LANGAUGE -> 

let siddhant = 1
let Siddhant = 2

console.log(siddhant)
console.log(Siddhant)


// 4 rule -> varaible name cannot be reserve keyword of js 

// let var = 2  


// bonus Rule : -> 

// always your varibale name should give a hint / should be realted to the varibale value and always delacre it in 
// camelcase 

//camelCase -> starting first letter or varaible should be small rest every starting letter should be captial 

// number_One = correct case 
// first_Name = correct camel  case

/**
  invaild
 let siddhant = 1
let Siddhant = 2

let number_one = 1
let number_two = 2
 */


// how to delcare multiple varaibles in a single line 

// this is list of name siddhant , arjun , jui , raj 

let first_Name = "siddhant",middle_Name= "Arjun" ,last_Name = "gadakh"

let fName = "siddhant"
let mName = "arjun"
let Lname = "gadakh"



// DATA STRUCTURES  --> DS 


// DATA TYPE JS ->  
/**
 * IN JS THERE TWO MAJOR CATAGORY DATA 
 * 
 * 1 PRIMIRTIVE DATATYPE   -> data types which are simple in nature and are non changeable (immutable)      
 * 2 NON PRIMITIVE DATATYPE -> the datatype which are complex in nature and change be change accroding to requrimnet
 */

// PRIMIRTIVE DATATYPE

// PRIMITIVE DATA INCULDES  
// 1 NUMBERS -> 
// 2 STRING -> 
// 3 BOOLEAN ->
// 4 undefined-> 
// 5 null   ->


// NON PRIMITIVE -> 
// 1 ARRAY 
// 2 OBJECT 



// HOW TO CHECK A DATA TYPE 

let Number_1 = 1

let Name = "siddhant"

let value = true

let token 

let v1 = null


// you will use a opertor called type of 

console.log(typeof Number_1)

console.log(typeof value)

console.log( typeof token )

console.log( typeof v1) // bug in js 

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
//
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
