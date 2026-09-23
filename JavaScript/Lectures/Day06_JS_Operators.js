// 22nd September 2026 Tuesday

// ============================================================
// 06 - JAVASCRIPT : OPERATORS
// ============================================================

// SECTION 1 -> WHAT ARE OPERATORS ?

// OPERATORS -> symbols in code that are used to perform operations on values (operands)

/**
 * DIFFERENT OPERATORS
 *
 * 1 ARITHMETIC OPERATORS   -> used to perform maths           ( + - * / % ** )
 * 2 ASSIGNMENT OPERATORS   -> used to assign values to variables ( = += -= *= /= %= )
 * 3 COMPARISON OPERATORS   -> used to compare two values, return boolean ( > < >= <= == === != !== )
 * 4 LOGICAL OPERATORS      -> used to combine/flip conditions ( && || ! )
 * 5 INCREMENT & DECREMENT  -> used to increase or decrease a value by 1 ( ++ -- )
 * 6 TERNARY OPERATOR       -> shortcut for if/else condition  ( ? : )
 * 7 TYPE OPERATORS         -> used to check the datatype of a variable ( typeof )
 *
 */


// ============================================================
// SECTION 2 -> ARITHMETIC OPERATORS
// ============================================================

/**
 * +  -> ADDITION
 * -  -> SUBTRACTION
 * *  -> MULTIPLICATION
 * /  -> DIVISION
 * %  -> MODULUS (REMAINDER after division)
 * ** -> EXPONENTIATION (power)
 *
 */


console.log(2 + 2)  // 4   -> addition
console.log(10 - 4) // 6   -> subtraction
console.log(6 * 3)  // 18  -> multiplication

// NOTE -> JS division does NOT cut decimals, it gives the FULL decimal result

console.log(10 / 2) // 5
console.log(10 / 3) // 3.3333333333333335

// % (modulus) -> gives the REMAINDER (very useful for even/odd checks)

console.log(10 % 3) // 1  -> 10 = (3 * 3) + 1  -> remainder is 1
console.log(15 % 2) // 1  -> remainder 1 means ODD number
console.log(16 % 2) // 0  -> remainder 0 means EVEN number

// ** (exponentiation) -> power

console.log(2 ** 3) // 8   -> 2 * 2 * 2
console.log(5 ** 2) // 25  -> 5 * 5
console.log( 3 ** 3) // 27 -> 3 * 3 * 3


// ============================================================
// SECTION 3 -> ASSIGNMENT OPERATORS
// ============================================================

// = -> simple assignment

let a = 10 // here = is the assignment operator
let b = a  // b also becomes 10


// SHORTCUT ASSIGNMENTS -> shorthand of "value = value operator something"

// +=  -> add and assign

let c = 5
let d = 10

// c = c + d   (long way)
c += d       // c = c + d  -> 5 + 10
console.log(c) // 15

// -= -> subtract and assign

let e = 100
let f = 10

// f = f - e   (long way)
f -= e       // f = f - e  -> 10 - 100
console.log(f) // -90


// EXTRA -> the same pattern works for ALL arithmetic operators

// multiply and assign
let g = 10 
g *= 3       // g = g * 3  -> 10 * 3
console.log(g) // 30

// divide and assign
let h = 10
h /= 5       // h = h / 5  -> 10 / 5
console.log(h) // 2

// remainder and assign
let i = 10
i %= 3       // i = i % 3  -> remainder of 10 / 3
console.log(i) // 1



// ============================================================
// SECTION 4 -> COMPARISON OPERATORS
// ============================================================

// Comparison operators compare two values and ALWAYS return a boolean (true / false)

let x = 10
let y = 5

console.log(x > y)   // true   -> 10 > 5
console.log(x < y)   // false  -> 10 < 5
console.log(x >= 10) // true   -> greater than or EQUAL
console.log(x <= 5)  // false  -> less than or equal

// == vs === -> IMPORTANT difference (interview favourite)

// ==  (loose comparison)  -> compares only the VALUE
// === (strict comparison) -> compares VALUE + DATATYPE (always prefer this)

// ==    Double Equal To == → loose equality
// ===   Strict Equal To

console.log(10 == 10)    // true
console.log(10 === 10)   // true

console.log(10 == "10")  // true  -> only value is compared (number vs string)
console.log(10 === "10") // false -> datatype is different (number vs string)

// !=    -> Not Equal To
// !===  -> Strict Not Equal To
console.log(5 != 5)      // false -> not equal (loose)
console.log(5 !== "5")   // true  -> value or datatype is different (strict)


// NOTE -> === is STRICT -> JS developers always use === and !==
console.log(10 > 5, 10 < 5) // can compare numbers // true false
console.log("b" > "a")      // can compare strings (alphabet order) // true


// ============================================================
// SECTION 5 -> LOGICAL OPERATORS
// ============================================================

// Logical operators combine or flip boolean conditions

/**
 * && -> AND  -> true only if BOTH sides are true
 * || -> OR   -> true if AT LEAST ONE side is true
 * !  -> NOT  -> flips the condition
 *
 */


let num1 = 10

// && -> AND

console.log(num1 > 5 && num1 < 20)  // true  -> BOTH conditions are true
console.log(num1 > 5 && num1 < 8)   // false -> second condition is false

// || -> OR

console.log(num1 > 5 || num1 < 8)   // true  -> first condition is true
console.log(num1 > 50 || num1 < 8)  // true  -> second condition is true
console.log(num1 > 50 || num1 > 80) // false -> NEITHER condition is true

// ! -> NOT (flips the boolean)

console.log(!true)      // false
console.log(!false)     // true
console.log(!(num1 > 5)) // false -> num1 > 5 is true, flipped -> false 


// ============================================================
// SECTION 6 -> INCREMENT & DECREMENT OPERATORS
// ============================================================


// ++ -> increases a value by 1
// -- -> decreases a value by 1

let count = 5

// count = count + 1  (long way)
// count += 1         (shortcut)
// ++count / count++  (operator way)

console.log(++count) // 6 -> PRE-increment: increase FIRST, then print
console.log(count) // 6 -> value is now 6

let step = 5

console.log(step--) // 5 -> POST-decrement: print FIRST, then decrease
console.log(step)   // 4 -> value is now 4

// NOTE -> pre (++x) changes the value before use, post (x--) uses the old value first


// ============================================================
// SECTION 7 -> TERNARY OPERATOR (? :)
// ============================================================

// TERNARY -> shortcut for if/else

/**
 * condition ? value_if_true : value_if_false
 *
 */

let num2 = 15

// long way (if/else)
/**
 * if (num2 % 2 === 0) {
 *   console.log("even")
 * } else {
 *   console.log("odd")
 * }
 *
 */


// ternary way

console.log(num2 % 2 === 0 ? "even" : "odd") // odd -> condition is false, so "odd"

let age = 20

console.log(age >= 18 ? "can vote" : "cannot vote") // can vote

let country = "India"
console.log(country === "India" ? "Can Vote" : "Can not Vote ")


// ============================================================
// SECTION 8 -> TYPE OPERATOR (typeof)
// ============================================================

// typeof -> returns the datatype of a value (as a string)

console.log(typeof 10)          // number
console.log(typeof "10")        // string
console.log(typeof true)        // boolean
console.log(typeof undefined)   // undefined



// useful check -> connects back to the comparison section

console.log(10 === "10")              // false
console.log(typeof 10 === typeof "10") // false -> number vs string

// ============================================================
// QUICK SUMMARY
// ============================================================

/**
 * ARITHMETIC  + - * / % **           -> maths
 * ASSIGNMENT  = += -= *= /= %=       -> assign + shortcut maths
 * COMPARISON  > < >= <= == === != !== -> compare, return boolean
 * LOGICAL     && || !                -> combine/flip conditions
 * INC/DEC     ++ --                  -> +1 / -1
 * TERNARY     ? :                    -> shortcut if/else
 * TYPE        typeof                 -> check datatype
 *
 */