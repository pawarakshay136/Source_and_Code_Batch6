// ============================================
// 10_ASSIGNMENT -> TOPIC : JS ARRAYS ( + revision of loops , strings & conditions )
// BASED ON : LECTURE/10_Array.js  +  THEORY_NOTES/10_JS_Array.md
//
// HOW TO RUN : open terminal -> node 10_ASSIGNMENT_JS_ARRAY.js
// RULES -> for every "predict the output" question , FIRST write your answer as a comment
//          BEFORE running the code . then write the code , run it and verify .
//          for every task FIRST write your plan as a comment , THEN write the code and test it .
//          an array is a NON-PRIMITIVE datatype -> it is stored by REFERENCE ->
//          before changing any array write in a comment WHOSE reference you are touching
//          ( theory notes -> section 6 ) .
//
// INTERVIEW RULES -> these 3 habits separate an INTERVIEW answer from a guessed answer :
//          1) PREDICT -> before running ANY array method , write your expected output
//             in a comment .
//          2) MUTATE CHECK -> for every method write in a comment -> MODIFIES ORIGINAL ? YES / NO
//             ( theory notes -> section 9 -> mutating vs non-mutating methods ) .
//          3) DRY RUN -> for loops over arrays write the first 2 rounds ->
//             index -> element -> what happens -> then code it and compare .
// ============================================


// ------------------- SECTION A : ARRAY BASICS -------------------

//Q1 --> PART A -> declare an EMPTY array named emptyList and print it together with its length
//        PART B -> declare an array named numbersList with MORE THAN 5 numbers inside
//        print -> the array , its length , the FIRST element , the MIDDLE element ,
//                 and the LAST element ( the last element MUST be found with length - 1
//                 -> never type the index by hand )
//        HINT -> first index -> 0 , last index -> length - 1 ,
//                 middle index -> Math.floor( numbersList.length / 2 )
//                 ( theory notes -> section 4 -> indexes and length )
//        TEST with -> change numbersList to an array of 6 elements and re-check the middle
//                      index -> for an EVEN length Math.floor gives the RIGHT side middle
//                      element -> write in a comment which index you got for length 6

console.log(`------------------- SECTION A : ARRAY BASICS -------------------`);
console.log("<-------------------- Q1 ------------------------------------>");

// Output:
// Empty Array: []
// Length: 0
// Array: [ 10, 20, 30, 40,50, 60, 70 ]
// Length: 7
// First Element: 10
// Middle Element: 40
// Last Element: 70


// PART A
let emptyList = []; // declare an empty array

console.log("Empty Array:", emptyList); // print empty array
console.log("Length:", emptyList.length); // print length


// PART B

let numbersList = [10, 20, 30, 40, 50, 60, 70]; // array with more than 5 numbers

console.log("Array:", numbersList); // print array
console.log("Length:", numbersList.length); // print array length
console.log("First Element:", numbersList[0]); // print first element

let middleIndex = Math.floor(numbersList.length / 2); // calculate middle index
console.log("Middle Element:", numbersList[middleIndex]); // crint middle element

console.log("Last Element:", numbersList[numbersList.length - 1]); // print last element using length - 1

console.log("<---------TEST with -> change numbersList to an array of 6 elements---------------------->")
// TEST: Check the middle element with 6 elements

numbersList = [10, 20, 30, 40, 50, 60]; // Change array to 6 elements

middleIndex = Math.floor(numbersList.length / 2); // calculate middle index

console.log("Test Array:", numbersList);
console.log("Test Length:", numbersList.length);
console.log("Test Middle Index:", middleIndex);
console.log("Test Middle Element:", numbersList[middleIndex]);

// For length 6, Math.floor(6 / 2) gives index 3
// Index 3 is the right side middle index and the element is 40


//Q2 --> declare an array named mixedDataTypes with MORE THAN 5 elements where at least
//        4 different datatypes are present ( number , string , boolean , null , even another
//        array ... ) -> print the array , its length , Array.isArray( mixedDataTypes ) and
//        typeof mixedDataTypes
//        expected -> Array.isArray( mixedDataTypes ) -> true   and   typeof mixedDataTypes -> "object"
//        HINT -> typeof can NEVER say "array" -> only Array.isArray() can ( notes -> section 5 )
//        THINK -> write in a comment -> why do BOTH an array and null print "object" under typeof ?

console.log("<-------------------- Q2 ------------------------------------>");

let mixedDataTypes = [10, "Hello", true, null, 25.5, ["Apple", "Mango"]]; // Declare an array with different datatypes

console.log("Array:", mixedDataTypes); // Print the array
console.log("Length:", mixedDataTypes.length); // Print array length
console.log("Array.isArray:", Array.isArray(mixedDataTypes)); // Check whether it is an array
console.log("typeof:", typeof mixedDataTypes); // Check datatype using typeof

// Both arrays and null return "object" because of a historical JavaScript behavior
// Array.isArray() is the correct way to check whether a value is an array

//Q3 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        let a = [10]
//        let b = [10]
//        console.log(a == b)
//        console.log(a === b)
//        HINT -> arrays are compared by REFERENCE , not by content ( notes -> section 6 ) ->
//                 each [ ... ] literal creates a NEW array at a NEW memory location
//        THINK -> write in a comment -> which datatype category IS equal by == and === by value ?

console.log("<-------------------- Q3 ------------------------------------>");

// Output:
// false
// false

let a = [10]; // Create the first array
let b = [10]; // Create a second, separate array

console.log(a == b); // Compare array references using ==
console.log(a === b); // Compare array references using ===
// Arrays are non-primitive datatypes and are compared by reference, not by content
// Primitive datatypes, such as numbers, strings, and booleans, are compared by value


//Q4 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        let base = [1, 2, 3]
//        let alias = base
//        alias.push(4)
//        console.log(base)
//        console.log(base === alias)
//        HINT -> "let alias = base" does NOT copy the array -> it only copies the REFERENCE ->
//                 both variables now point at the SAME array ( notes -> section 6.1 )
//        THINK -> write in a comment -> which variable actually changed the array here ?

console.log("<-------------------- Q4 ------------------------------------>");

// Output:
// [1, 2, 3, 4]
// true

let base = [1, 2, 3]; // Create an array
let alias = base; // Copy the reference, not the array itself

alias.push(4); // Add 4 to the same array using alias

console.log(base); // Print the updated array
console.log(base === alias); // Check whether both variables refer to the same array

// The alias variable changed the array by using push(4).
// Both base and alias point to the same array in memory.

//Q5 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        const fixed = [1, 2, 3]
//        fixed.push(4)
//        console.log(fixed)
//        // fixed = [9]        <- UNCOMMENT this line and run again -> what error do you see ?
//        THINK -> if a const array cannot be REASSIGNED , why does push() still work ?
//                 write the answer in a comment -> changing the CONTENT of the reference
//                 ( mutating ) vs changing the REFERENCE itself ( reassigning ) -> notes section 6 + 9

console.log("<-------------------- Q5 ------------------------------------>");

// OUTPUT:
// [1, 2, 3, 4]

const fixed = [1, 2, 3]; // Declare an array using const

fixed.push(4); // Add 4 to the existing array

console.log(fixed); // Print the updated array

// fixed = [9]; // Uncomment this line to see the error
// push() works because it changes the content of the existing array (mutating).
// Reassigning fixed to a new array is not allowed because fixed is declared with const.
// Mutating means changing the existing array's content.
// Reassigning means making the variable refer to a different array.

// ------------------- SECTION B : IT COMPANIES ( CLASSIC EXERCISE ) -------------------

// the below array is GIVEN -> do NOT change its order while answering Q6 -> Q10
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Q6 --> PART A -> print the whole array with console.log()
//        PART B -> print the NUMBER of companies ( do NOT type 7 -> use .length )
//        PART C -> print the FIRST company , the MIDDLE company and the LAST company
//        HINT -> length = 7 -> indexes 0 , Math.floor(7 / 2) = 3 , 7 - 1 = 6
//        expected -> Facebook , Apple , Amazon

console.log("<------------------ SECTION B : IT COMPANIES ( CLASSIC EXERCISE ) ------------------->")

console.log("<-------------------- Q6 ------------------------------------>");

// Output:
// IT Companies: [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon'
// ]
// Number of Companies: 7
// First Company: Facebook
// Middle Company: Apple
// Last Company: Amazon

// PART A: Print the whole array
console.log("IT Companies:", itCompanies);

// PART B: Print the number of companies
console.log("Number of Companies:", itCompanies.length);

// PART C: Print the first, middle, and last companies
console.log("First Company:", itCompanies[0]); // Index 0 gives the first company

let middleIndex1 = Math.floor(itCompanies.length / 2); // Calculate the middle index
console.log("Middle Company:", itCompanies[middleIndex1]); // Index 3 gives Apple

console.log("Last Company:", itCompanies[itCompanies.length - 1]); // Last index is length - 1

//Q7 --> PART A -> print EVERY company one by one with a loop ( one per line , with its index )
//                   format -> 0 -> Facebook
//        PART B -> make a NEW array named upperCompanies where every company is UPPERCASED
//                   -> print upperCompanies AND the original itCompanies
//        HINTS -> PART A -> normal for loop , i runs from 0 -> length - 1 ( notes -> section 16 )
//                 PART B -> push the result of toUpperCase() into the NEW array inside the loop
//                            the original array must stay unchanged ( print it to prove it )
//        expected ( PART B ) -> [ 'FACEBOOK', 'GOOGLE', 'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'AMAZON' ]
//        BONUS -> redo PART B in ONE LINE with map() later in Q26 ( notes -> section 17.1 )

console.log("<-------------------- Q7 ------------------------------------>");

// Output:
// 0 -> Facebook
// 1 -> Google
// 2 -> Microsoft
// 3 -> Apple
// 4 -> IBM
// 5 -> Oracle
// 6 -> Amazon
// Uppercase Companies: [
//   'FACEBOOK',
//   'GOOGLE',
//   'MICROSOFT',
//   'APPLE',
//   'IBM',
//   'ORACLE',
//   'AMAZON'
// ]
// Original Companies: [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon'
// ]

// PART A: Print every company with its index
for (let i = 0; i < itCompanies.length; i++) { // Loop through the array
    console.log(i + " -> " + itCompanies[i]); // Print index and company name
}

// PART B: Create a new array with uppercase company names
let upperCompanies = []; // Create an empty array for uppercase names

for (let i = 0; i < itCompanies.length; i++) { // Loop through the original array
    upperCompanies.push(itCompanies[i].toUpperCase()); // Convert name to uppercase and add it
}

console.log("Uppercase Companies:", upperCompanies); // Print the new array
console.log("Original Companies:", itCompanies); // Print original array to prove it is unchanged

//Q8 --> print the array AS A SENTENCE ->
//        Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
//        HINT -> do NOT type the company names -> build the sentence FROM the array ->
//                 every company EXCEPT the last joined with ", "   +   " and "   +
//                 the last company   +   " are big IT companies."
//                 join() -> notes -> section 13.3 -> the separator sits BETWEEN elements
//                 slice(0 , -1) copies everything except the last element ( notes -> section 12 )
//        BONUS -> solve it again with a normal loop instead of join()

console.log("<-------------------- Q8 ------------------------------------>");

// Output: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazonare big IT companies.

// BONUS: Build the sentence using a normal loop
let companySentenceWithLoop = ""; // Create an empty string

for (let i = 0; i < itCompanies.length; i++) { // Loop through all companies
    if (i === itCompanies.length - 1) { // Check whether this is the last company
        companySentenceWithLoop += "and " + itCompanies[i]; // Add "and" before the last company
    } else if (i === itCompanies.length - 2) { // Check whether this is the second-last company
        companySentenceWithLoop += itCompanies[i] + " "; // Add a space without a comma
    } else {
        companySentenceWithLoop += itCompanies[i] + ", "; // Add a comma after other companies
    }
}
companySentenceWithLoop += "are big IT companies."; // Add the remaining sentence

console.log(companySentenceWithLoop); // Print the sentence

//Q9 --> check if a company exists ->
//        PART A -> search for "Netflix" -> print -> Netflix is not found
//        PART B -> search for "Amazon"  -> print -> Amazon exists
//        RULE -> the company name must come from a VARIABLE -> starter is GIVEN below ->
let searchCompany = "Netflix" // TEST with -> "Amazon" , "oracle" ( small o )
//        HINT -> includes() gives true / false ( notes -> section 11 ) ->
//                 if the company exists print "<name> exists" else print "<name> is not found"
//        THINK -> searching for "oracle" ( small o ) gives NOT FOUND -> write in a comment WHY
//                 ( the search is CASE SENSITIVE -> notes -> section 11 -> indexOf / includes )

console.log("<-------------------- Q9 ------------------------------------>");

// Output:
// Netflix is not found
// Amazon exists
// oracle is not found

// PART A: Search for Netflix
let searchCompany1 = "Netflix"; // Store the company name to search

if (itCompanies.includes(searchCompany1)) { // Check whether Netflix exists
    console.log(searchCompany1 + " exists"); // Print if found
} else {
    console.log(searchCompany1 + " is not found"); // Print if not found
}

// PART B: Search for Amazon
searchCompany1 = "Amazon"; // Change the company name to Amazon

if (itCompanies.includes(searchCompany1)) { // Check whether Amazon exists
    console.log(searchCompany1 + " exists"); // Print if found
} else {
    console.log(searchCompany1 + " is not found"); // Print if not found
}

// TEST: Search for lowercase oracle
searchCompany1 = "oracle"; // Change the company name to lowercase oracle

if (itCompanies.includes(searchCompany1)) { // Check whether lowercase oracle exists
    console.log(searchCompany1 + " exists"); // Print if found
} else {
    console.log(searchCompany1 + " is not found"); // Print if not found
}
// "oracle" is not found because includes() is case-sensitive.
// The array contains "Oracle" with a capital O, not "oracle" with a small o. 

//Q10 --> filter out the companies which have MORE THAN ONE "o" ->
//         PART A -> WITHOUT using filter() -> normal loop + if + push into a new array
//         PART B -> redo the same WITH filter()
//         expected -> [ 'Facebook', 'Google', 'Microsoft' ]   ( Microsoft has TWO o's too! )
//         HINT -> count the "o" of one company -> company.split("o").length - 1
//                  ( string lecture 04 -> "Facebook".split("o") -> [ 'Faceb', '', 'k' ]
//                    -> length 3 -> 3 - 1 = 2 o's -> that is MORE THAN ONE -> keep it )
//                  in PART A the count goes inside an if condition ,
//                  in PART B the SAME condition goes inside the filter() callback
//         THINK -> write in a comment -> what does split() RETURN ( string -> array ? ) -> and
//                  why is split() allowed here even though it is a STRING method ? ( lecture 04 )

console.log("<-------------------- Q10 ------------------------------------>");

// Output:
// Part A: [ 'Facebook', 'Google', 'Microsoft' ]
// Part B: [ 'Facebook', 'Google', 'Microsoft' ]

// PART A: Use a normal loop, if condition, and push()

let companiesWithMoreThanOneO = []; // Create a new empty array

for (let i = 0; i < itCompanies.length; i++) { // Loop through all companies
    let company = itCompanies[i]; // Get the current company name
    let oCount = company.split("o").length - 1; // Count lowercase "o" letters

    if (oCount > 1) { // Check whether the company has more than one "o"
        companiesWithMoreThanOneO.push(company); // Add the company to the new array
    }
}

console.log("Part A:", companiesWithMoreThanOneO); // Print matching companies


// PART B: Use filter()

let filteredCompanies = itCompanies.filter(function(company) { // Check each company
    let oCount = company.split("o").length - 1; // Count lowercase "o" letters
    return oCount > 1; // Keep the company if it has more than one "o"
});

console.log("Part B:", filteredCompanies); // Print matching companies

// split("o") returns an array by splitting the string wherever lowercase "o" appears.
// It is allowed because each company name, such as "Google", is a string.
// length - 1 gives the number of lowercase "o" letters.
// The original itCompanies array remains unchanged.

// ------------------- SECTION C : ADD & REMOVE ( MUTATING METHODS ) -------------------

//Q11 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        let stack = ["html", "css", "js"]
//        let newLen = stack.push("react")
//        console.log(stack)
//        console.log(newLen)
//        let removed = stack.pop()
//        console.log(stack)
//        console.log(removed)
//        HINT -> push RETURNS the new LENGTH ( a number ) , pop RETURNS the removed element
//                 ( a value ) -> BOTH modify the original array ( notes -> section 10 table )

//Q12 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        let queue = ["a", "b", "c"]
//        let startLen = queue.unshift("z")
//        let firstOut = queue.shift()
//        console.log(queue)
//        console.log(startLen)
//        console.log(firstOut)
//        HINT -> unshift adds at the START and returns ______ ?
//                 shift removes from the START and returns ______ ?  ( notes -> section 10 table )
//        THINK -> write in a comment -> which real life queue / stack does push-pop remind you of ?

//Q13 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        let agesDel = [12, 18, 25, 30, 15]
//        delete agesDel[1]
//        console.log(agesDel)
//        console.log(agesDel.length)
//        console.log(agesDel[1])
//        HINT -> delete leaves a HOLE and does NOT change the length ( notes -> section 8.4 )
//        then redo the SAME removal with splice( 1 , 1 ) on a fresh copy and print it ->
//                 write in a comment -> which one real projects use and WHY
//                 ( think -> the hole -> a for loop meeting the hole -> undefined )

//Q14 --> SHOPPING CART ( classic exercise ) -> the starter is GIVEN below ->
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]
//        1) add "Meat" at the BEGINNING , but only if it is not already in the cart
//        2) add "Sugar" at the END , but only if it is not already in the cart
//        3) remove "Honey" ( assume an allergy ) , but only if it exists
//        4) modify "Tea" into "Green Tea"
//        print the cart after EVERY step
//        HINTS -> presence check -> includes() ( notes -> section 11 )
//                 add at start -> unshift() , add at end -> push()
//                 remove -> indexOf() + splice( index , 1 )   ( notes -> section 12 )
//                 modify -> either direct index update ( notes -> section 8.2 )
//                            or indexOf() + splice( index , 1 , "Green Tea" )
//        expected ( final cart ) -> [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
//        TEST -> run the file again with "Meat" and "Sugar" ALREADY inside the starter array ->
//                 the cart must NOT get duplicates -> that is exactly why includes() is asked

//Q15 --> BONUS -> EMPTY an array in 3 different ways and print the length after each ->
//        1) pop() inside a while loop        2) splice( 0 , workList.length )
//        3) workList.length = 0
//        starter -> let workList = ["a", "b", "c", "d"]
//        ( use 3 SEPARATE copies -> e.g. workListA = workList.slice() ... -> so each way
//          starts with the same 4 elements )
//        HINT -> write in a comment -> which way is the CLEANEST ->
//                 and confirm that NONE of the 3 ways created a NEW array
//                 ( all of them emptied the SAME reference -> notes -> section 6.1 + 9 )

// ------------------- SECTION D : SEARCHING ( indexOf / includes / find / findIndex / at ) -------------------

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]

//Q16 --> ETHIOPIA check ( classic exercise ) ->
//        if "Ethiopia" exists in the countries array print -> ETHIOPIA
//        else add "Ethiopia" to the END of the array and print the array
//        HINT -> includes() for the check ( notes -> section 11 ) , push() for the else branch
//        TEST -> first run it as given ( it EXISTS -> expected -> ETHIOPIA ) ,
//                 then REMOVE "Ethiopia" from the countries array , run again ,
//                 and see the else branch add it back ( the array then has 11 items again )

//Q17 --> SASS check ( classic exercise ) -> the starter is GIVEN below ->
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"]
//        if "Sass" exists print -> Sass is a CSS preprocess
//        else add "Sass" to the array and print the whole array
//        HINT -> Sass does NOT exist -> so your code MUST take the else branch ->
//                 expected -> [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Sass' ]
//        BONUS -> print every web tech with its index -> format -> 0 -> HTML  ( one per line )

//Q18 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        const fruits = ["Apple", "Banana", "Mango", "Orange"]
//        console.log(fruits.indexOf("Mango"))
//        console.log(fruits.indexOf("mango"))
//        console.log(fruits.includes("mango"))
//        console.log(fruits.at(-1))
//        console.log(fruits.at(10))
//        HINT -> indexOf returns ______ when the value is NOT found ,
//                 at() accepts a NEGATIVE index ( -1 -> last element ) ,
//                 an out of range index returns ______ ( never an error -> notes -> section 4 + 11 )

//Q19 --> marks -> the starter is GIVEN below ->
const marks = [45, 67, 89, 23, 76]
//        PART A -> find() -> the first mark ABOVE 80            ( expected -> 89 )
//        PART B -> find() -> the first mark ABOVE 900           ( expected -> undefined )
//        PART C -> findIndex() -> the index of the first mark ABOVE 80   ( expected -> 2 )
//        PART D -> WITHOUT any searching method -> find the HIGHEST mark with a normal loop
//                  ( the same running-max idea as assignment 09 )
//        HINT -> find() / findIndex() take a CALLBACK ( a FUNCTION ) -> the condition returns
//                 true / false -> find gives the ELEMENT , findIndex gives the INDEX
//                 ( notes -> section 11 rows 4 + 5 , callbacks -> section 17 )

// ------------------- SECTION E : SLICE vs SPLICE + SORT / REVERSE / JOIN / SPLIT -------------------



//Q22 --> SORT & REVERSE ( both MODIFY the original -> work on COPIES ) ->
//        PART A -> let nums = [29, 100, 42, 5, 9, 10]
//                  PREDICT first -> write the output of nums.sort() in a comment , then run it
//                  expected -> [ 10, 100, 29, 42, 5, 9 ]  -> write in a comment WHY this is
//                  NOT a number sort ( every element becomes a STRING first -> notes -> 13.1 )
//        PART B -> redo it CORRECTLY for numbers with the comparator ( a , b ) => a - b
//                  expected -> [ 5, 9, 10, 29, 42, 100 ]
//        PART C -> sort the companies alphabetically -> print itCompanies ( it CHANGES now! )
//                  then reverse() it and print it AGAIN
//        THINK -> sort() and reverse() return the SAME array and MODIFY the original ->
//                 write in a comment HOW you proved it ( the printed itCompanies is the proof
//                 -> notes -> section 13.1 + 13.2 -> mutating methods )

//Q23 --> TEXT -> WORDS ( classic exercise ) -> the starter is GIVEN below ->
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
//        PART A -> remove ALL the punctuation ( . and , ) and split the string into an array
//                  named words -> print words AND words.length
//        expected -> [ 'I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach',
//                      'HTML', 'CSS', 'JS', 'React', 'Python' ]   and   13
//        HINT -> text.replace(/[.,]/g , "") .split(" ")   ( string lecture 04 -> split )
//                 replace() with a REGEX /g flag removes EVERY match , not only the first
//        PART B -> reverse the WORD order and join it back into ONE string
//                  ( use the cleaned text -> punctuation removed )
//                  expected -> Python React JS CSS HTML teach I people empowering and teaching love I
//                  HINT -> the classic 3 step trick -> split -> reverse -> join ( notes -> 13.2 )
//        PART C -> WITHOUT any method -> count how many words START with an UPPERCASE letter
//                  expected -> 7
//                  ( I , I , HTML , CSS , JS , React , Python )
//                  HINT -> a word starts with an uppercase letter when
//                          word[0] === word[0].toUpperCase() AND word[0] !== word[0].toLowerCase()
//                          ( the same letter test you used in assignment 09 Q5 )
//        THINK -> write in a comment -> why does split(" ") keep an EMPTY word if the string
//                 starts / ends with a space ? ( TEST it with " js " -> what is the length ? )

// ------------------- SECTION F : CONCAT , FLAT , MAX & MIN -------------------

//Q24 --> FULL STACK ( classic exercise ) -> the starters are GIVEN below ->
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
//        PART A -> concatenate both into a new variable named fullStack
//                  ( do NOT change frontEnd / backEnd -> print both after concat to prove it )
//        expected -> [ 'HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB' ]
//        HINT -> concat() returns a NEW array -> the originals stay untouched
//                 ( notes -> section 14 -> concat table row )
//        PART B -> push "Angular" into frontEnd and "GraphQL" into backEnd ,
//                  then build fullStack AGAIN and print it -> 9 elements expected now
//        PART C -> flatten the nested array below -> const nested = [1, [2, 3], [4, [5, 6]]]
//                  expected -> nested.flat()          -> [ 1, 2, 3, 4, [ 5, 6 ] ]   ( depth 1 only )
//                  expected -> nested.flat(Infinity)  -> [ 1, 2, 3, 4, 5, 6 ]       ( all levels )
//        THINK -> write in a comment -> why is flat() NOT needed on a concat() result ?
//                 ( concat joins arrays SIDE BY SIDE , it never puts one array INSIDE another )

//Q25 --> MAX & MIN -> the starter is GIVEN below ->
const number_a = [42, 17, 89, 3, 56, 91, 24, 68, 12, 75, 34, 100, 7, 63, 48]
//        PART A -> the SPREAD way -> Math.max( ...number_a ) and Math.min( ...number_a )
//                  expected -> 100 and 3
//        PART B -> the SORT way -> sort a COPY -> number_a.slice().sort((a, b) => a - b)
//                  then take the FIRST element ( min ) and the LAST element ( max )
//                  -> the same answers are expected -> print number_a at the end and write
//                  in a comment -> why is number_a still unsorted here ? ( slice() copy trick )
//        PART C -> the SECOND LARGEST element          ( expected -> 91 )
//        PART D -> the SUM of all numbers with reduce() ( expected -> 729 )
//        HINT -> spread ( ... ) expands the array into individual arguments ->
//                 Math.max(...arr) is like Math.max(42 , 17 , 89 ...) ( notes -> section 15 )
//                 the second largest -> sortedCopy[ sortedCopy.length - 2 ]

// ------------------- SECTION G : HIGHER-ORDER METHODS ( map / filter / forEach / every / some / reduce ) -------------------

// a HIGHER-ORDER method is a method which ACCEPTS a FUNCTION ( a callback ) as an argument
// -> the method calls that function once FOR EVERY element ( notes -> section 17 )

const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Q26 --> MAP -> make a NEW array where every element is doubled -> print it
//        expected -> [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
//        HINT -> FIRST write the same task with a normal for loop + push into a new array
//                 ( notes -> section 16 -> example 1 )
//                 THEN rewrite it in ONE line with map() ( notes -> section 17.1 ) ->
//                 let doubled = array_num.map((el) => { return el * 2 })
//        THINK -> write in a comment -> what does map() RETURN ( the SAME array or a NEW one ? )
//                 and does it modify array_num ? ( print array_num after -> prove your answer )

//Q27 --> FILTER ->
//        PART A -> only the elements ABOVE 5      ( expected -> [ 6, 7, 8, 9, 10 ] )
//        PART B -> only the EVEN elements          ( expected -> [ 2, 4, 6, 8, 10 ] )
//        PART C -> redo Q10 PART B -> the IT companies with more than one "o" , now WITH filter()
//        HINT -> the callback inside filter() returns true / false -> only the elements where
//                 it is true are KEPT -> the new length can shrink to even 0
//                 ( notes -> section 17.2 -> filter table row )

//Q28 --> EVERY & SOME -> PREDICT first -> write your 4 answers in the comments , then run ->
//        console.log(array_num.every((el) => el > 5))     // answer -> ______
//        console.log(array_num.every((el) => el > 0))     // answer -> ______
//        console.log(array_num.some((el) => el > 5))      // answer -> ______
//        console.log(array_num.some((el) => el > 100))    // answer -> ______
//        HINT -> every() behaves like && -> ALL elements must pass ( notes -> section 17.4 )
//                 some()  behaves like || -> AT LEAST ONE element must pass
//        THINK -> both return a BOOLEAN -> write in a comment which one you would use to check
//                 "are ALL marks passing ?" vs "is ANY mark failing ?" in a school result sheet

//Q29 --> FOREACH -> print every company of itCompanies WITH its index using forEach()
//        format -> 0 -> Facebook      ( one per line )
//        then write in a comment -> what does forEach() RETURN ? ( notes -> section 17.3 )
//                 -> and why would map() be the WRONG choice when we ONLY want to print ?

//Q30 --> REDUCE -> the starter is GIVEN below ( it is used AGAIN in SECTION H ) ->
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//        PART A -> the SUM of all ages with reduce()       ( expected -> 228 )
//        PART B -> the AVERAGE with reduce()               ( expected -> 22.8 )
//        PART C -> the OLDEST student's age with reduce()  ( expected -> 26 )
//        HINTS -> reduce( callback , initialValue ) -> the accumulator carries the running
//                 result from round to round ( notes -> section 17.5 ) ->
//                 let sum = ages.reduce((acc, el) => { return acc + el } , 0)
//                 the average = sum / ages.length -> print it with toFixed(1) to keep 1 decimal
//                 PART C -> the reduce() version of Math.max ->
//                 start the accumulator at -Infinity and keep the bigger of acc / el

// ------------------- SECTION H : STATISTICS ON ARRAYS ( CLASSIC LEVEL 3 EXERCISE ) -------------------

// this section uses the SAME ages array declared in Q30 -> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// and the SAME countries array declared in SECTION D ( 11 items )

//Q31 --> SORT the ages ASCENDING without changing the original array -> store the sorted copy
//        in a variable named sortedAges -> then print ->
//        the MIN age , the MAX age , the SECOND LARGEST age , the SECOND SMALLEST age
//        expected -> 19 , 26 , 25 , 19
//        THINK -> the second SMALLEST is 19 and NOT 20 -> because 19 appears TWICE
//                 ( sorted[1] is 19 again -> write in a comment why index 1 is the right pick )
//        HINT -> sortedAges = ages.slice().sort((a , b) => a - b)   ( the copy trick -> notes -> 15 )
//                 min -> sortedAges[0]   max -> sortedAges[ sortedAges.length - 1 ]
//                 second largest -> length - 2      second smallest -> index 1
//        THINK -> write in a comment -> what would happen if you skipped slice() and sorted
//                 the ORIGINAL ages array directly ? ( mutating method -> notes -> section 13 )

//Q32 --> MEDIAN age -> the MIDDLE value -> ONE item for an ODD length ,
//        the AVERAGE of the two middle items for an EVEN length
//        expected -> sorted -> [ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ] -> 10 items -> EVEN
//                    the two middle indexes are 4 and 5 -> ( 24 + 24 ) / 2 -> median = 24
//        HINT -> length = 10 -> the middle indexes are ( length / 2 - 1 ) and ( length / 2 )
//                 for an ODD length ( e.g. 9 ) only ONE middle index exists -> Math.floor( length / 2 )
//        TEST -> remove ONE age from a copy ( length 9 ) and redo it -> the median becomes 24 still
//                 ( sorted 9 items -> [19, 19, 20, 22, 24, 24, 24, 25, 25] -> middle index 4 )
//                 write in a comment for the 9 item case -> why is the AVERAGE not needed here ?

//Q33 --> AVERAGE , RANGE and the two distances ->
//        PART A -> average = sum / count                  ( expected -> 22.8 )
//        PART B -> range  = max - min                     ( expected -> 7 )
//        PART C -> compare Math.abs( min - average ) with Math.abs( max - average )
//                  print WHICH distance is bigger and by how much
//                  expected -> | 19 - 22.8 | = 3.8   and   | 26 - 22.8 | = 3.2
//                              -> the MIN side is farther from the average ( 3.8 > 3.2 )
//        HINT -> Math.abs() removes the minus sign of a negative number ( revision -> numbers
//                 lecture 03 ) -> reuse the sum from Q30 PART A or reduce() it again here
//                 toFixed(1) keeps exactly 1 decimal -> 22.80 -> "22.8"

//Q34 --> COUNTRIES EXERCISES ( classic ) -> on the countries array from SECTION D ->
//        PART A -> print the FIRST 10 countries with slice( 0 , 10 )  ( the array has 11 items )
//        PART B -> find the MIDDLE country(ies) -> length = 11 -> ODD -> only ONE middle item
//                  expected -> Finland  ( index 5 -> Math.floor( 11 / 2 ) )
//        PART C -> divide the countries into TWO equal halves -> when the length is ODD
//                  the FIRST half keeps the extra country
//                  expected -> first half ( 6 ) -> Albania , Bolivia , Canada , Denmark ,
//                              Ethiopia , Finland
//                              second half ( 5 ) -> Germany , Hungary , Ireland , Japan , Kenya
//        HINT -> half = Math.ceil( countries.length / 2 )
//                 firstHalf  = countries.slice( 0 , half )
//                 secondHalf = countries.slice( half )
//                 print BOTH halves and BOTH lengths -> the two lengths must add up to 11
//        THINK -> write in a comment -> why did slice() NOT change the countries array while
//                 Q22 PART C DID change itCompanies ? ( safe copy vs mutating method )

// ------------------- SECTION I : INTERVIEW QUESTIONS ( answer in comments ) -------------------

//Q35 --> why is an array called a NON-PRIMITIVE datatype ? answer in 2 lines and give one
//        example of an array that stores 4 different datatypes ( notes -> section 1 + 2 )

//Q36 --> what is the difference between a PROPERTY and a METHOD of an array ?
//        give 1 example of each and write what the example returns ( notes -> section 7 )

//Q37 --> fill this table in comments -> for every method write RETURNS ... and MODIFIES ORIGINAL ? ... ->
//        push , pop , unshift , shift , slice , splice , sort , reverse ,
//        map , filter , join , concat , forEach , reduce
//        ( the full table is in notes -> section 18 -> write it in YOUR OWN words first ,
//          then check with the notes )

//Q38 --> "delete arr[1] is NOT the right way to remove an element" -> explain in 2 -> 3 lines
//        ( think -> the HOLE -> the length -> a for loop meeting the hole -> undefined )
//        then write the 2 CORRECT alternatives ( notes -> section 8.4 + 12 )

//Q39 --> why does [100, 9].sort() give [ 100 , 9 ] ?
//        explain the string conversion inside sort() and write the CORRECT way to sort numbers
//        ( notes -> section 13.1 -> the comparator ( a , b ) => a - b )

//Q40 --> map() vs forEach() -> which one do you use when you need a NEW array and which one
//        when you only want to PERFORM AN ACTION ?
//        what does each one RETURN ? give 1 line of code as the proof for each
//        ( notes -> section 17.1 + 17.3 )

//Q41 --> INTERVIEW FAVOURITE -> PREDICT the output ( write the answer FIRST , then run ) ->
//        let x = [1, 2]
//        let y = x
//        let z = x.slice()
//        y.push(3)
//        z.push(4)
//        console.log(x)
//        console.log(y)
//        console.log(z)
//        write in a comment -> WHY are x and y the same but x and z are NOT
//        ( reference sharing -> notes section 6.1  vs  slice() copy -> notes section 12 )


// ============================================
// FINAL STEP -> print the GIVEN arrays once more -> itCompanies , countries , webTechs ,
//        shoppingCart and ages -> and write in a comment WHICH questions changed them on
//        purpose ( Q14 , Q17 , Q22 ... -> mutating methods -> notes -> section 9 )
//
// SUBMISSION CHECKLIST
// 1. every PREDICT question has your answer written BEFORE you ran the code
// 2. every Q has its PLAN written as a comment BEFORE the code
// 3. for every method you used -> MODIFIES ORIGINAL ? YES / NO is written in a comment
// 4. every expected output matches the real output ( or the difference is explained
//    in a comment )
// 5. ALL the TEST values given in the question were tried ( change the variable , run again )
// 6. the final print of the 5 given arrays proves you know exactly which ones were changed
// 7. every fixed bug has the REASON of the bug written in a comment ( not only the fix )
// 8. file runs without any error -> node 10_ASSIGNMENT_JS_ARRAY.js
// ============================================