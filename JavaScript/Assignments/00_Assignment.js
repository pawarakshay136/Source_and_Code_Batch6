//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

let number = 7020400749
// a) convert it to a string using String() and print the typeof
console.log(String(number))
console.log(typeof String(number))
// b) convert it to a string using toString() and print the typeof
console.log(number.toString())
console.log(typeof number.toString())

// NOTE -> String() works even on null/undefined,
// but .toString() gives an ERROR on null and undefined (they have no methods)
// console.log(String(null))     // "null"
// console.log(null.toString()) // TypeError -> Cannot read properties of null
