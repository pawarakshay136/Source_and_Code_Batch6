// ============================================
// 08_ASSIGNMENT -> TOPIC : JS DATE & TIME (+ revision of numbers, strings & conditions)
// BASED ON : LECTURE/08_date.js  +  THEORY_NOTES/08_JS_Date.md
//
// HOW TO RUN : open terminal -> node 08_ASSIGNMENT.js
// RULES -> prompt() works ONLY in the browser console -> we run files with node, so every
//          "user input" is SIMULATED with a variable -> change its value, run the file again,
//          and verify ALL the cases written in the question.
//          for every task FIRST write your plan as a comment, THEN write the code and test it.
// NOTE -> date / time outputs change every minute -> the "e.g." values below are only samples.
// ============================================


// ------------------- SECTION A : SECONDS LIVED + TIME FORMATS -------------------

//Q1 --> PART A -> take the age in a variable ( starter -> let age = 25 )
//        calculate how many SECONDS the person has lived
//        ( assume 365 days per year -> ignore leap years in this question )
//
//        expected -> 25 years = 788400000 seconds
//
//        HINT -> break it down :
//                1 day  = 24 hours * 60 minutes * 60 seconds = 86400 seconds
//                1 year = 365 days -> 365 * 86400 = 31536000 seconds
//                then multiply by the age

console.log("<-------------------- Q1 ------------------------------------>")

// // TEST with -> 
// 25 = 788400000 Seconds
// 15 = 473040000 Seconds
// 40 = 1261440000 Seconds
// 100 = 3153600000 Seconds
// 1 =   31536000 Seconds

let age = 25
let day_1 = 24 * 60 * 60 
console.log(`Seconds in a day :- ${day_1} Seconds`)

let year_1 = 365 * day_1
console.log(`Seconds in a year :- ${year_1} Seconds`)

let lived_seconds = age * year_1
console.log(`The person has lived :- ${lived_seconds} Seconds`)

console.log("<-------------------- Q1 PART B ------------------------------------>")


//Q1 --> PART B -> assume the maximum age of a person is 100 years
//        calculate the TOTAL seconds a person can live
//
//        expected -> 100 years = 3153600000 seconds
//
//        HINT -> same formula -> just use 100 instead of the age


let age1 = 100

let day_1_seconds = 24 * 60 * 60 
console.log(`Seconds in a day :- ${day_1} Seconds`)

let year_1_seconds = 365 * day_1
console.log(`Seconds in a year :- ${year_1} Seconds`)

let lived_seconds1 = age1 * year_1
console.log(`100 gae person has lived :- ${lived_seconds1} Seconds`)

//Q1 --> PART C -> print the CURRENT date + time in these 4 formats :
//
//        1) dd:mm:yyyy HH:mm        ( 24 hours )
//           e.g. ->  30:09:2026 21:51
//
//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm
//
//        3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm
//
//        4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
//           e.g. ->  2026:09:30 21:51
//
//        HINTS ->
//        - date parts      -> getDate() , getMonth() + 1 , getFullYear()   ( notes -> section 2 )
//        - month words     -> toLocaleString("en-gb", { month: "short" })  -> "Sept"
//                             -> add .toLowerCase() -> "sept"              ( notes -> section 3 )
//        - pad the numbers -> value < 10 ? `0${value}` : value             ( notes -> section 4 )
//        - 12 hour time    -> hour % 12 with the 12 o'clock fix + AM / PM  ( notes -> section 5 )
//
//        NOTES ->
//        - pad the hours and minutes -> "9:5 pm" is wrong -> "09:05 pm"
//        - use ONE date object and reuse it ( do not create a new Date() for every line )

/**
 * SAMPLE ( run on 30-09-2026 at 21:51 )
 *
 * 30:09:2026 21:51
 * 30:sept:2026 09:51 pm
 * 30:september:2026 09:51 pm
 * 2026:09:30 21:51
 */

console.log("<-------------------- Q1 PART C ------------------------------------>")

let date = new Date()

let current_date = date.getDate()
let padded_date = current_date < 10 ? `0${current_date}`: current_date

let current_month = date.getMonth()
let padded_month = current_month < 10 ? `0${current_month}` : current_month

let current_year = date.getFullYear()
let current_hour = date.getHours()
let padded_hour = current_hour < 10 ? `0${current_hour}` : current_hour
let current_minutes = date.getMinutes()
let padded_minutes = current_minutes < 10 ? `0${current_minutes}` : current_minutes

console.log(`${padded_date}:${padded_month}:${current_year} ${padded_hour}:${padded_minutes}`)

//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm

let cur_hr1 = date.getHours()
let cur_min2 = date.getMinutes()
let cur_sec2 = date.getSeconds()

let ampm = cur_hr1 < 12 ? "am" : "pm"

let hours_12 = cur_hr1 % 12
let pad_hour1 =hours_12 < 10 ?`0${hours_12}`:hours_12

let min1 = cur_min2 < 10? `0${cur_min2 }`: cur_min2  
// let seconds1 = cur_sec2 < 10 ? `0${cur_sec2}`: cur_sec2

let short_month = date.toLocaleDateString("en-gb",{month:"short"})

console.log(`${padded_date}:${short_month}:${current_year} ${pad_hour1}:${min1} ${ampm}`)
// 30:sept:2026 09:51 pm

//  3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//  e.g. ->  30:september:2026 09:51 pm

let long_month = date.toLocaleDateString("en-gb",{month:"long"})

console.log(`${padded_date}:${long_month}:${current_year} ${pad_hour1}:${min1} ${ampm}`)
// 02:October:2026 00:55 am

// 4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
// e.g. ->  2026:09:30 21:51
        
console.log(`${current_year}:${padded_month}:${padded_date} ${padded_hour}:${padded_minutes}`)
//  2026:09:02 01:07

// ------------------- SECTION B : FULL DATE STRING -------------------

//Q2 --> return the date in this format ->  "Day of the Week, DD Month YYYY HH:mm"
//
//        PART A -> 24 hour clock
//           e.g. ->  "Monday, 02 October 2024 15:30"
//
//        PART B -> 12 hour clock + am/pm
//           e.g. ->  "Monday, 02 October 2024 3:30 pm"
//
//        HINTS ->
//        - weekday word -> toLocaleString("en-gb", { weekday: "long" })  -> "Monday"
//        - month word   -> toLocaleString("en-gb", { month: "long" })    -> "October"
//        - DD -> pad the date with the ternary -> 02 ( pad ONLY the date here )
//        - time -> build it like exercise 1 -> and remember -> minutes stay padded -> "3:05 pm"
//        - join everything with a template literal ( lecture 04 )
//
//        NOTE -> in PART B the hour does NOT need a leading zero -> "3:30 pm" ( like the example )

/**
 * SAMPLE ( run on 30-09-2026 at 21:51 )
 *
 * Wednesday, 30 September 2026 21:51
 * Wednesday, 30 September 2026 9:51 pm
 */

console.log("<-------------------- Q2 SECTION B ------------------------------------>")

let cur_date = date.getDate()
let padedd_date = cur_date < 10 ? `0${cur_date}`: cur_date

let long_month1 = date.toLocaleDateString("en-gb",{month:"long"}) 

let cur_year = date.getFullYear()

let cur_hour = date.getHours()
let formated_hour = cur_hour < 10 ? `0${cur_hour}`: cur_hour

let ampm1 = cur_hour < 12 ? "am" : "pm"
let hours_12_1 = cur_hour % 12 === 0 ? 12 : cur_hour % 12
let pad_hour = hours_12_1 < 10 ? `0${hours_12_1}` : hours_12_1

let cur_min = date.getMinutes()
let pad_min = cur_min < 10 ? `0${cur_min}` : cur_min

let day_name = date.toLocaleDateString("en-gb",{weekday:"long"})

//Oputput Format: "Monday, 02 October 2024 15:30"
console.log(`${day_name}, ${padedd_date} ${long_month} ${cur_year} ${formated_hour}:${pad_min}`)

// Oputput Format: "Monday, 02 October 2024 3:30 pm"
// With padding = Friday, 02 October 2026 02:46 pm
console.log(`${day_name}, ${padedd_date} ${long_month} ${cur_year} ${pad_hour}:${pad_min} ${ampm1}`)

// Without padding =  Friday, 02 October 2026 2:46 pm
console.log(`${day_name}, ${padedd_date} ${long_month} ${cur_year} ${hours_12}:${pad_min} ${ampm1}`)


// ------------------- SECTION C : DAYS LEFT UNTIL A SPECIFIC DATE -------------------

//Q3 --> take a target date -> let target_date = "2026-12-31"    ( input format -> YYYY-MM-DD )
//
//        calculate HOW MANY DAYS are left BETWEEN TODAY and the target date
//        and print ->  "Days left until 2026-12-31 : 92"
//
//        HINTS ->
//        - new Date("2026-12-31") -> creates a date object from a string
//        - subtracting two dates -> ( target_date_obj - today ) -> the result is in MILLISECONDS
//        - convert ms -> days -> divide by ( 1000 * 60 * 60 * 24 )   ( ms in one day )
//        - wrap it with Math.ceil() -> so a partially started day counts as a full day ( lecture 03 )
//        - print the result with a template literal
//        - TEST with -> "2027-01-01" and "2026-10-01" and check the numbers
//
//        THINK -> what will the answer be when the target date is IN THE PAST ?

/**
 * SAMPLE ( run on 30-09-2026 )
 *
 * Days left until 2026-12-31 : 92
 */

console.log("<-------------------- Q3 SECTION C ------------------------------------>")

let date1 = new Date()
let target_date = "2026-12-31" 

let difference = new Date(target_date) - date1
console.log(difference) // MILLISECONDS

// ms -> days -> divide by ( 1000 * 60 * 60 * 24 )
let days_left =  Math.ceil(difference / ( 1000 * 60 * 60 * 24 ))
console.log(`Days left until ${target_date} : ${days_left}`)


// ------------------- SECTION D : LEAP YEAR -------------------

//Q4 --> check if a year is a LEAP YEAR -> print -> "2026 is not a leap year"
//
//        RULES of a leap year ( write them in a comment first ) :
//        1) the year is divisible by 4          -> year % 4 === 0
//        2) century years ( like 1900 , 2100 ) are NOT leap years
//           -> UNLESS the year is divisible by 400
//
//        the final formula -> ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0
//
//        HINTS ->
//        - start with the CURRENT year -> new Date().getFullYear()
//        - print the message with a TERNARY ( lectures 06 + 07 )
//        - TEST by changing the year variable -> 2024 ( leap ) , 2025 ( not ) ,
//          2000 ( leap ) , 1900 ( NOT leap -> century rule )

/**
 * SAMPLE ( run in 2026 )
 *
 * 2026 is not a leap year
 */

console.log("<-------------------- Q4 SECTION D : LEAP YEAR ------------------------------------>")

// Output:
// 2026 is not a leap year
// 2024 = 2024 is a leap year
// 2025 = 2025 is not a leap year
// 2000 = 2000 is a leap year
// 1900 = 1900 is not a leap year

let date2 = new Date()

let year = date2.getFullYear()
// date2.getFullYear()

let leap_year = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

console.log(`${year} is ${leap_year ? "a leap year" : "not a leap year"}`)


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q5 --> BONUS -> TOMORROW'S DATE ->
//        print TOMORROW's date in dd/mm/yyyy format ->  e.g.  "Tomorrow -> 01/10/2026"
//
//        HINT -> store today's date in a variable , then setDate( getDate() + 1 )
//                ( lecture 08 -> SECTION 7 , set methods )
//        THINK -> what happens when today is the LAST day of the month ?
//                 does setDate() handle the overflow by itself ?

/**
 * SAMPLE ( run on 30-09-2026 )
 *
 * Tomorrow -> 01/10/2026
 */

console.log("<-------------------- Q5  SECTION E : BONUS CHALLENGE  ------------------------------------>")

let date3 = new Date()

date3.setDate(date3.getDate() + 1)

let day_3 = date3.getDate()
let month_3 = date3.getMonth() + 1
let year_3 = date3.getFullYear()

let padded_day3 = day_3 < 10 ? `0${day_3}` : day_3
let padded_month3 = month_3 < 10 ? `0${month_3}` : month_3

console.log(`Tomorrow -> ${padded_day3}/${padded_month3}/${year_3}`)

// what happens when today is the LAST day of the month?
// setDate() automatically handles the overflow.
// It moves to the first day of the next month.
// e.g.
// 31/10/2026 -> 01/11/2026
// 31/12/2026 -> 01/01/2027

//Q6 --> BONUS -> WEEKDAY OF THE TARGET DATE ->
//        take the target date from exercise 3 -> "2026-12-31"
//        print which weekday it is ->  "2026-12-31 is a Thursday"
//
//        HINTS ->
//        - toLocaleString("en-gb", { weekday: "long" }) works on ANY date object
//        - EXTRA -> also print the SHORT weekday -> "Thu" -> { weekday: "short" }

/**
 * SAMPLE
 *
 * 2026-12-31 is a Thursday
 * 2026-12-31 is a Thu
 */

console.log("<-------------------- Q6  BONUS  ------------------------------------>")

// Output:
// 2026-12-31 is a Thursday
// 2026-12-31 is a Thu

let date4 = new Date()

let target_date4 = "2026-12-31"

date4 = new Date(target_date4)  // converted target date to date object 

let weekday = date4.toLocaleString("en-gb", { weekday: "long" })
let short_weekday = date4.toLocaleString("en-gb", { weekday: "short" })

console.log(`${target_date4} is a ${weekday}`)
console.log(`${target_date4} is a ${short_weekday}`)


// ============================================
// SUBMISSION CHECKLIST
// 1. all 4 time formats ( Q1 ) print correct separators , padded numbers and am/pm
// 2. every value is tested with ALL the cases written in the question ( change the variable , run again )
// 3. leap year is tested for -> 2024 , 2025 , 2000 , 1900
// 4. every answer / observation is written in comments
// 5. file runs without any error -> node 08_ASSIGNMENT.js
// ============================================