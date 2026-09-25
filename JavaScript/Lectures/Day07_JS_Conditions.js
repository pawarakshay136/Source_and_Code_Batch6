// 23rd September 2026 Wednesday

//Condition --> 

// When we have to make decision based condition even it is called conditional programing 

/**
 * IN JS WE HAVE DIFFERENT CONDITION 
 * 
 * 
 * IF() -                   USED ON SINGLE CONDITION 
 * IF ELSE() -              USED IN EITHER OR CONDITONS ( TERNARY OPERTOR)
 * ELSE IF () -             USED MORE MUTIPLE CONDITION (2 OR MORE)
 * SWITCH CASE() -          USED MORE MUTIPLE CONDITION (2 OR MORE)
 */

//if() --> this condition is used to check a single condition output 

/*
syntax 

if(condition){output}

*/

// example 


// 1 write program which will only take input number greater 0 

let num = -100

if (num > 0) { console.log(` enter input number as ${num}`) }


// if else() --> this to used for either or

//ternary console.log(num2 % 2 === 0 ? "even" : "odd") 


/* syntax

if(condition){output}
else{output for coindition 2}
*/


let even_odd_num = 555

if (even_odd_num % 2 == 0) { console.log(` the given number ${even_odd_num} is a even number`) }
else { console.log(` the given number ${even_odd_num} is a odd number`) }


// if (even_odd_num%2==0){console.log(` the given number ${even_odd_num} is a even number`)}
// if (even_odd_num%2!==0){console.log( ` the given number ${even_odd_num} is a odd number`)}


//else if --> used for mutiple condition (more than 2 )

/*
syntax

if(condition){output}

else if (condition 2  ) {output 2}

else if (condition 3  ) {output 3}


else{output for coindition 2} // default 

*/

// create a program to find the grade of the student based upon the marks recived 

/**
 * A -> 90
 * B ->80-90
 * C ->70> <80
 * D ->40-70 
 * F ->40 
 * deflaut -> abesnt 
 */


let student_marks_1 = undefined

if (student_marks_1 > 90) { console.log(` He has recvied A grade `) }

else if (student_marks_1 > 80 && student_marks_1 <= 90) { console.log(` He has recvied B grade `) }

else if (student_marks_1 > 70 && student_marks_1 <= 80) { console.log(` He has recvied C grade `) }

else if (student_marks_1 >= 40 && student_marks_1 <= 70) { console.log(` He has recvied D grade `) }

else if (student_marks_1 < 40 ) { console.log(` He has failed the exam `) }

else { console.log("the student was not present for the exam") }


// create a program to suggest accessory accoring weather 

/**
 * summer => carry water bottle and cap 
 * rainy => carry rain coat/ umberlla
 * winter =>carry warm clothes/ gloves 
 * 
 * default => enter correct output
 * 
 */


let season = "SUMMER"

if(season.toLocaleLowerCase()==="summer"){console.log("carry cap and water bottle")}

else if(season.toLocaleLowerCase()==="rainy"){console.log("carry raincoat /umberlla")}

else if(season.toLocaleLowerCase()==="winter"){console.log("carry warm clothes/gloves")}

else{ console.log("enter correct input")}


// 25th September 2025, Friday 


//Switch CASE -> this is latest addition in es6 ( and this most prefered by deveopler due to syntax clarity )


/**
 * syntax
 * 
 * 
 * switch(parameter ){
 * 
 * case 1 :case 1 output
 * case 2 :case 2 output 
 * case 3 :case 3 output
 *
 * default : default output 
 * 
 * }
 */

// check if number is positive or negative 

console.log("------------------switch case -------------------")
let num_1 = 10


switch (true) {

    case num_1 > 0: console.log(`the given number ${num_1} is postive number`)
        break
    case num_1 < 0: console.log(`the given number ${num_1} is negative number`)
        break
    case num_1 === 0: console.log(`the given number is zero`)
        break
    default: console.log(` the given input is NAN`)
}

// in addition to swtich for every case we need a keyword which will end the case if condition met -->
// that keyword break

// break -> it will end the program when the case is met 


// create a program to inform the employee about to work form office or home  or holiday 

let day = "sun"

let format_day = day.toLowerCase()


switch (format_day) {
    case "monday" || "mon": console.log("work form office")
        break
    case "tuesday" || "tue": console.log("work form office")
        break
    case "wednesday" || "wed": console.log("work form home")
        break
    case "thursday" || "thu": console.log("work form home")
        break
    case "friday" || "fri": console.log("work form home")
        break
    case "sat": console.log("week off")
        break
    case "sun": console.log("week off")
        break
    default: console.log("enter correct input")

}

/**
 * 
 * 
let student_marks_1 = undefined

if (student_marks_1 > 90) { console.log(` He has recvied A grade `) }
else if (student_marks_1 > 80 && student_marks_1 <= 90) { console.log(` He has recvied B grade `) }
else if (student_marks_1 > 70 && student_marks_1 <= 80) { console.log(` He has recvied C grade `) }
else if (student_marks_1 >= 40 && student_marks_1 <= 70) { console.log(` He has recvied D grade `) }
else if (student_marks_1 < 40) { console.log(` He has failed the exam `) }
else { console.log("the student was not present for the exam") }

 */

let marks = 91

switch (true) {
    case marks > 90: console.log(` He has recvied A grade `)
        break
    case marks > 80 && marks <= 90: console.log(` He has recvied B grade `)
        break
    case marks > 70 && marks <= 80: console.log(` He has recvied C grade `)
        break
    case marks >= 40 && marks <= 70: console.log(` He has recvied D grade `)
        break
    case marks < 40: console.log(` He has failed the exam `)
        break
    default: console.log("the student was not present for the exam")

}




// optimzed example 
let day_1 = "monday"

let format_day_1 = day_1.toLowerCase()


switch (format_day_1) {
    case "monday" || "mon":
    case "tuesday" || "tue": console.log("work form office")
        break
    case "wednesday" || "wed":
    case "thursday" || "thu":
    case "friday" || "fri": console.log("work form home")
        break
    case "sat":
    case "sun": console.log("week off")
        break
    default: console.log("enter correct input")

}