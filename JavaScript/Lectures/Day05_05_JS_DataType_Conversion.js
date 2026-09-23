// ============================================================
// 05 - JAVASCRIPT : DATA TYPE CONVERSION
// ============================================================

// SECTION 1 -> WHY DO WE NEED DATA TYPE CONVERSION ?

// DATA TYPE CONVERSION -> converting a value from one datatype to another
// (most common -> string <--> number)

// WHY ? -> data coming from prompt(), form inputs, APIs, files is ALWAYS a string.
// "199" + 1 -> "1991" (WRONG result, we wanted 200)
// so before doing maths we must convert string -> number

console.log(typeof 7895)  // number
console.log(typeof "1")   // string

// THE CLASSIC EXAMPLE -> + with a string does CONCATENATION, not addition

console.log(1 + "1") // "11"  -> + saw a string, so it JOINED them (string)

// ============================================================
// SECTION 2 -> STRING -> NUMBER
// ============================================================

let str_num_1 = '123456789'

console.log(typeof str_num_1) // string

// ------------------------------------------------------------
// 2.1 Number() -> converts a string into a number
// ------------------------------------------------------------

let one = Number("ASDFGHJKMNBVC")
console.log(one) // NaN  -> "Not a Number"
// NOTE -> you CANNOT convert letters/words into a number.
// if the string is not a valid number, the result is NaN (typeof NaN is still "number")

let one_1 = Number("1234567890")
console.log(one_1) // Number 
console.log(typeof one_1)
// You can convert number string in to number "1234567890" = 1234567890


// valid conversion -> the string must LOOK like a number

let str_num_2 = "987452145852"
console.log(Number(str_num_2)) // 987452145852
console.log(typeof Number(str_num_2)) // number

// EXTRA -> special cases (very important, asked in interviews)
console.log(Number(""))        // 0
console.log(Number(null))      // 0
console.log(Number(undefined)) // NaN = Not a number
console.log(Number(true))      // 1 boolean (true = 0)
console.log(Number(false))     // 0 boolean (false = 1)

// ------------------------------------------------------------
// 2.2 parseFloat() -> converts a string into a FLOATING (decimal) number
// ------------------------------------------------------------

let str_num_3 = "123.456"

console.log(parseFloat(str_num_3)) // 123.456
console.log(typeof parseFloat(str_num_3)) // number

// EXTRA -> parseFloat reads from the START and stops at the first invalid character
console.log(parseFloat("123.456abc")) // 123.456
console.log(parseFloat("abc123"))     // NaN (string must START with a number)


// ------------------------------------------------------------
// 2.3 parseInt() -> converts a string into an INTEGER (no decimals)
// ------------------------------------------------------------ 

let str_num_4 = "53841.5135"

console.log(parseInt(str_num_4))        // 53841 (decimal part is CUT, not rounded)
console.log(typeof parseInt(str_num_4)) // number

// EXTRA -> parseInt also stops at the first invalid character
console.log(parseInt("99px")) // 99
console.log(parseInt("px99")) // NaN = Not a number

// parseInt vs parseFloat quick compare ->
// parseInt("53841.5135")   -> 53841     (cuts the decimal part)
// parseFloat("53841.5135") -> 53841.5135
// both give NaN on "abc"


let two_2 = "11.11"

console.log(typeof two_2) // String
console.log(parseFloat(two_2)) // 11.11 
console.log(typeof parseFloat(two_2)) // number

console.log(parseInt(two_2)) // 11
console.log(typeof parseFloat(two_2)) // number




// ============================================================
// SECTION 3 -> NUMBER -> STRING
// ============================================================

// ------------------------------------------------------------
// 3.1 String() -> converts a number into a string
// ------------------------------------------------------------


let number = 7020400749

console.log(String(number))        // "7020400749"
console.log(typeof String(number)) // string


let number_1 = 1010
console.log(typeof number_1) // Number
console.log(String(number_1)) // "1010"
console.log(typeof String(number_1)) // string


// ------------------------------------------------------------
// 3.2 toString() -> converts a number into a string
// ------------------------------------------------------------

console.log(number.toString())        // "7020400749"
console.log(typeof number.toString()) // string

// NOTE -> String() works even on null/undefined,
// but .toString() gives an ERROR on null and undefined (they have no methods)
console.log(String(null))     // "null"
// console.log(null.toString()) // TypeError -> Cannot read properties of null

let number_2 = 5555
console.log(typeof number_2) // number
console.log(number_2.toString()) // "5555"
console.log(typeof number_2.toString()) // string

console.log("1", typeof String(" "))
console.log("2",typeof String(""))
console.log("3",typeof String())

console.log(String(null))
// console.log(null.toString()) // Error: Cannot read properties of null


// ============================================================
// SECTION 4 -> OTHER CONVERSIONS (boolean)
// ============================================================

// Boolean() -> converts any value to true / false

console.log(Boolean("hello")) // true  (non-empty string -> true)
console.log(Boolean(""))      // false (empty string -> false)
console.log(Boolean())        // false 
console.log(Boolean(0))       // false
console.log(Boolean(100))     // true  (any non-zero number -> true)

// FALSY VALUES (memorize these 6 -> everything else is TRUE) :
// false, 0, "" (empty string), null, undefined, NaN

// ============================================================
// SECTION 5 -> AUTOMATIC (COERCION) CONVERSION WITH OPERATORS
// ============================================================

// JS sometimes converts datatypes AUTOMATICALLY -> this is called COERCION.
// rules ->
// IF both sides of + are NUMBER  -> + acts as ARITHMETIC operator
// IF ANY side of + is a STRING   -> + acts as CONCATENATION (joins them)
// ANY operator OTHER than + (- * / %) works on NUMBERS only,
// so JS converts the string to a number AUTOMATICALLY first


// QUESTION FOR YOU (assignment level) ->

console.log(5 + 5)     // 10   -> number + number -> arithmetic
console.log(5 + "5")   // "55" -> number + string -> CONCAT
console.log("5" - 5)   // 0    -> minus converts "5" to 5 automatically
console.log(5 - "5")   // 0    -> minus converts "5" to 5 automatically
console.log("5" * 5)   // 25   -> multiply converts "5" to 5 automatically
console.log("5" / 5)   // 1    -> division converts "5" to 5 automatically



// what about booleans ? true -> 1 , false -> 0 (when used with - * /)

console.log("5" - true)  // 4  -> true becomes 1  -> 5 - 1
console.log("5" - false) // 5  -> false becomes 0 -> 5 - 0
console.log("5" + true)  // "5true"  -> + sees a string -> CONCAT
console.log("5" + false) // "5false" -> + sees a string -> CONCAT

console.log(true + "5")  // "true5"  -> + sees a string -> CONCAT
console.log(false + "5") // "false5" -> + sees a string -> CONCAT


// INTERVIEW FAVOURITE -> the UNARY + trick (fastest string -> number conversion)

console.log(+"5")     // 5   (string converted to number)
console.log(+"5.5")   // 5.5
console.log(+"abc")   // NaN = Not a number
console.log(typeof +"5") // number

// ============================================================
// SECTION 6 -> NaN (NOT A NUMBER)
// ============================================================

// NaN -> "Not a Number" -> the result of a FAILED number conversion / failed maths

let failed = Number("hello")
console.log(failed)          // NaN
console.log(typeof failed)   // number  (NaN is still of type NUMBER)

let theree_3 = "24" // string
console.log(typeof theree_3) // string
console.log(typeof Number(theree_3)) // number


// isNaN() -> checks if a value is NaN -> returns boolean

console.log(isNaN(failed))     // true
console.log(isNaN("123"))      // false
console.log(isNaN("hello123")) // true

// NOTE -> NaN is NOT equal to anything, not even to itself !
console.log(NaN === NaN) // false  (classic interview question)
// that is why we use isNaN() to detect it

