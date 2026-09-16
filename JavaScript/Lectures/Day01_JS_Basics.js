// Day01: JavaScript Basics 07th September 2026, Monday

// how run js file  ->

//1 step -> click on file you need to run 
//2 step -> open in intergated terimnial
//3 in terminal type  -> node filename.js

//how print in terminal

// in console print  hello world 
console.log("hello")


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
var one = 1
var two = 2

console.log(one)
console.log(two)


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
/*
WE USE LET FOR UPDATING VARAIBLES
WE CONST FOR CONSTANT VARIABLES
WE DONT USE VAR 


//LET AND CONST IS BLOCK SCOPE VARIABLE 
//VAR IS FUNCTIONAL SCOPE VARIABLE
*/
