//Q24 --> BONUS (MINI PROJECT - TYPE INSPECTOR REPORT) ->
//        Declare one value of each type :
//        a string, a number, a boolean, undefined, and null.
//        Print a report in EXACTLY this format (use template literals + typeof) :
//           "abc"      -> string
//           123        -> number
//           true       -> boolean
//           undefined  -> undefined
//           null       -> ???
//        HINT -> one line will SURPRISE you. typeof null is NOT "null".
//        write the real output + explain in comments (famous JS interview quirk!).

let str_1 = "Akshay A Pawar"
let num_1 = 24
let isIndian = true
let und_1 
let nullValue = null

console.log(
    `"${str_1}"      -> ${typeof str_1}
${num_1}        -> ${typeof num_1}
${isIndian}       -> ${typeof isIndian}
${und_1}  -> ${typeof und_1}
${nullValue}       -> ${typeof nullValue}`
)

// typeof null is "object", not "null".
// This is a famous JavaScript quirk.
// null represents an intentional absence of a value,
// but typeof null returns "object"






