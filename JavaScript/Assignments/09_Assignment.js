// ============================================
// 09_ASSIGNMENT -> TOPIC : JS LOOPS (+ revision of conditions, modulo & string methods)
// BASED ON : LECTURE/09_loops.js  +  THEORY_NOTES/09_JS_Loops.md
//
// HOW TO RUN : open terminal -> node 09_ASSIGNMENT_JS_LOOPS.js
// RULES -> prompt() works ONLY in the browser console -> we run files with node, so every
//          "user input" is SIMULATED with a variable -> change its value, run the file again,
//          and verify ALL the cases written in the question.
//          for every task FIRST write your plan as a comment, THEN write the code and test it.
//          if the program hangs -> you created an INFINITE LOOP -> stop it with Ctrl + C and
//          fix the direction / the missing increment ( theory notes -> section 10 ).
//
// INTERVIEW RULES -> these 2 habits separate an INTERVIEW answer from a guessed answer :
//          1) PREDICT -> before running ANY loop, write your expected output / answer in a comment.
//          2) DRY RUN -> before coding, take the first 3 counter values in a small table in your
//             comments -> round -> counter value -> what happens -> then code it and compare.
//             in an interview the TRAIL of your thinking is judged , not only the final output.
// ============================================


// ------------------- SECTION A : FOR LOOP ( END POINT KNOWN ) -------------------

//Q1 --> multiplication table -> take the number in a variable ( starter -> let tableNum = 7 )
//        PART A -> print the table from 1 -> 10   ( format -> "7 x 1 = 7" )
//        PART B -> print the SAME table in REVERSE ( 10 -> 1 ) with a decrement loop
//        TEST with -> 2 , 7 , 0 , 13  ( the label must ALWAYS print the variable value )
//        HINT -> never type the number inside the template literal -> write ${tableNum}
//                ( theory notes -> section 4.1 )
//
//        expected ( tableNum = 7 ) -> PART A first 3 lines
//        7 x 1 = 7
//        7 x 2 = 14
//        7 x 3 = 21
//        PART B first line -> 7 x 10 = 70

console.log(`------------------- SECTION A : FOR LOOP ( END POINT KNOWN ) -------------------`)
console.log("<-------------------- Q1 ------------------------------------>")

let tableNum = 7 

for(let i = 1; i <=10; i++){
    console.log(`${tableNum} x ${i} = ${tableNum * i}`)
}

console.log("<-------------------- Test with 2 ------------------------------------>")

let tableNum1 = 2 // TEST with -> 2 

for(let i = 1; i <=10; i++){
    console.log(`${tableNum1} x ${i} = ${tableNum1 * i}`)
}

console.log("<-------------------- Test with 0 ------------------------------------>")

let tableNum3 = 0 // TEST with -> 0 

for(let i = 1; i <=10; i++){
    console.log(`${tableNum3} x ${i} = ${tableNum3 * i}`)
}

console.log("<-------------------- Test with 13 ------------------------------------>")

let tableNum4 = 13 // TEST with -> 13 

for(let i = 1; i <=10; i++){
    console.log(`${tableNum4} x ${i} = ${tableNum4 * i}`)
}

console.log("<-------------------- PART B -> REVERSE TABLE Of 7 ( 10 -> 1 ) ------------------------------------>")

let tableNum5 = 7 // REVERSE TABLE Of 7 

for(let i = 10; i >= 1 ; i--){
    console.log(`${tableNum5} x ${i} = ${tableNum5 * i}`)
}

console.log("<-------------------- PART B -> REVERSE TABLE Of 2 ( 10 -> 1 ) ------------------------------------>")

let tableNum6 = 2 // TEST with -> 2 

for(let i = 10; i >= 1 ; i--){
    console.log(`${tableNum6} x ${i} = ${tableNum6 * i}`)
}

console.log("<-------------------- PART B -> REVERSE TABLE Of 0 ( 10 -> 1 ) ------------------------------------>")

let tableNum7 = 0 // TEST with -> 0 

for(let i = 10; i >= 1 ; i--){
    console.log(`${tableNum7} x ${i} = ${tableNum7 * i}`)
}

console.log("<-------------------- PART B -> REVERSE TABLE Of 13 ( 10 -> 1 ) ------------------------------------>")

let tableNum8 = 13 // TEST with -> 13 

for(let i = 10; i >= 1 ; i--){
    console.log(`${tableNum8} x ${i} = ${tableNum8 * i}`)
}


//Q2 --> FIZZBUZZ ( classic interview question ) ->
//        loop from 1 -> 30 and print ONE value per round :
//        - "Fizz"     when the number is divisible by 3
//        - "Buzz"     when the number is divisible by 5
//        - "FizzBuzz" when the number is divisible by BOTH 3 and 5
//        - the number itself for every other round
//        HINTS -> divisible check -> n % 3 === 0 ( modulo -> revision )
//                 write the BOTH condition FIRST , because 15 is also divisible by 3
//        expected ( first 16 rounds ) -> 1 2 Fizz 4 Buzz 7 Fizz 8 9 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16

console.log("<-------------------- Q2 ------------------------------------>")

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // && = Both condition true then print "FizzBuzz"
        console.log(`FizzBuzz`)
    } else if (i % 3 === 0) { 
        console.log(`Fizz`)
    } else if (i % 5 === 0) {
        console.log(`Buzz`)
    } else {
        console.log(i) // i is form 1 to 30
    }
}


//Q3 --> FACTORIAL ->  n! = 1 x 2 x 3 x ... x n      ( starter -> let factNum = 10 )
//        print -> "10! = 3628800"
//        HINT -> the running product starts at 1 ( NOT 0 -> anything * 0 is always 0 )
//                 the counter runs from 1 -> factNum
//        TEST with -> 10 ( 3628800 ) , 5 ( 120 ) , 0 ( 1 )
//        THINK -> 0! is DEFINED as 1 -> does your loop print 1 for 0 WITHOUT any extra if ? why ?
console.log("<-------------------- Q3 ------------------------------------>")

// Output: TEST with -> 5 , 0
// "10! = 3628800"
// "0! = 1"
// "5! = 120"

let factNum = 10 // TEST with -> 5 , 0
let result = 1

for ( let i = 1; i <= factNum; i++){
    result *=  i  
    // result = result * i
}
console.log(`"${factNum}! = ${result}"`)

//Q4 --> FACTORS -> print every factor of the number ( starter -> let factN = 60 )
//        one factor per line , in increasing order
//        HINT -> f is a factor of n when n % f === 0 -> loop f from 1 -> n
//        BONUS -> also print the SUM of all the factors
//        TEST with -> 60 ( factors sum = 168 ) , 13 ( prime -> only 1 and 13 -> sum = 14 )
//                      28 ( a PERFECT number -> sum of the factors WITHOUT 28 itself = 28 -> why ? )

console.log("<-------------------- Q4 ------------------------------------>")

let factN = 60 // TEST with -> 13 , 28

// ------------------- SECTION B : LOOP OVER A STRING -------------------

//Q5 --> starter -> let info_str = "JavaScript"
//        PART A -> print every character WITH its index , format ->  0 -> J   ( one per line )
//        PART B -> count UPPERCASE letters and LOWERCASE letters SEPARATELY
//                   ( ignore spaces / digits / symbols -> count only letters )
//        HINTS -> info_str[i] is the character at position i , the loop runs i < info_str.length
//                 letter test  -> ch.toUpperCase() !== ch.toLowerCase()   ( for " " both stay equal )
//                 upper letter -> the character is still equal to its own toUpperCase()
//        expected ( PART B ) -> uppercase = 2 , lowercase = 8   ( J and S are the big ones )

let info_str = "JavaScript"


//Q6 --> count the VOWELS ( a e i o u ) in the string ( starter below )
//        HINT -> first .toLowerCase() the character -> otherwise "A" / "E" will be missed
//                counter starts at 0 ( theory notes -> section 4.3 )
//        expected -> 10
//        TEST with -> change the string to "HELLO WORLD" ( expected -> 3 ) and re-check

let v_str = "i love writing javascript loops" // expected -> 10


//Q7 --> count the WORDS without using ANY method ( no split / no trim )
//        idea -> words = number of spaces + 1  ( the loop only COUNTS the spaces )
//        starter -> let count_str = "loops make boring code interesting"
//        RULE -> the string must NOT start / end with a space and must NOT contain double spaces
//        expected -> 5
//        THINK ( write in a comment ) -> ONE example string where this trick gives a WRONG answer

let count_str = "loops make boring code interesting" // expected -> 5


//Q8 --> REVERSE a string with a loop -> do NOT use .split / .reverse / .slice
//        starter -> let r_str = "javascript"
//        print the original and the reversed string on 2 lines
//        HINT -> build the answer BACKWARDS -> start i at r_str.length - 1 and go down to 0
//                 the last INDEX is length - 1 ( never write i <= length )
//        expected -> javascript
//                    tpircsavaj
//        TEST with -> "madam" , "js" ( expected -> "sj" )

let r_str = "javascript"


//Q9 --> PALINDROME check with a loop -> a word that reads the same forwards and backwards
//        starter -> let p_str = "madam"
//        print -> "madam is a palindrome"   /   for a test value -> "hello is NOT a palindrome"
//        HINT -> use TWO indexes inside ONE loop : one starts at 0 ( goes up ) ,
//                 one starts at length - 1 ( goes down ) -> compare p_str[start] with p_str[end]
//                 if a pair differs -> NOT a palindrome -> stop the loop with break
//        TEST with -> "madam" , "racecar" , "hello" , "js"

let p_str = "madam" // TEST with -> "hello" , "racecar"

// ------------------- SECTION C : WHILE ( END POINT NOT KNOWN ) -------------------

//Q10 --> SUM OF DIGITS -> starter -> let s_num = 47891
//        print -> "Sum of digits of 47891 = 29"
//        HINT -> a number cannot be indexed like a string -> pull the LAST digit with  n % 10
//                 then REMOVE the last digit -> n = Math.floor(n / 10) -> keep adding till n is 0
//        TEST with -> 47891 ( 29 ) , 1000 ( 1 ) , 0 ( 0 -> a while loop runs 0 rounds for 0
//                   -> write in a comment why that is still CORRECT )

let s_num = 47891 // TEST with -> 1000 , 0


//Q11 --> REVERSE THE NUMBER -> starter -> let rev_num = 12345
//        print -> "12345 reversed = 54321"
//        HINT -> same digit trick as Q10 : lastDigit = n % 10
//                 reversed = reversed * 10 + lastDigit   ( the * 10 pushes the old digits left )
//                 start reversed at 0 , remove the digit from n , loop while n > 0
//        TEST with -> 12345 ( 54321 ) , 7 ( 7 ) , 100 ( 1 -> WHY is the answer not 001 ? write it )

let rev_num = 12345 // TEST with -> 7 , 100


//Q12 --> FIBONACCI -> every term = sum of the previous 2 terms ( 0 , 1 , 1 , 2 , 3 , 5 , 8 ... )
//        print ALL terms that are BELOW 500 using a while loop
//        HINT -> you do NOT know how many terms exist -> that is exactly why while is chosen
//                 keep 3 variables : first , second , next = first + second
//                 print first , then shift -> first = second , second = next
//        expected -> 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377    ( next would be 610 -> stop )

let fib_a = 0
let fib_b = 1
// TEST -> do not forget the FIRST term ( 0 ) -> print it before the loop or inside round 1


//Q13 --> DOUBLE UNTIL IT PASSES ONE MILLION ->
//        start at 1 , keep doubling , and COUNT how many doublings are needed before the value
//        becomes GREATER than 1000000
//        print -> the number of steps AND the final value
//        HINT -> the number of steps is NOT known before running -> while
//                 keep a counter outside , double the value and increase the counter every round
//        expected -> steps = 20 , final value = 1048576

let dbl_num = 1



// ------------------- SECTION D : DO...WHILE ( FIRST RUN GUARANTEED ) -------------------

//Q14 --> COUNT THE DIGITS with do...while -> starter -> let d_num = 47891
//        print -> "47891 has 5 digits"
//        HINT -> keep dividing by 10 ( n = Math.floor(n / 10) ) until the number becomes 0
//                 THE EDGE CASE -> when d_num = 0 the loop still runs ONCE -> "0 has 1 digits"
//                 write in a comment WHY a normal while loop fails for 0 here ( it would print 0 digits )
//        TEST with -> 47891 ( 5 ) , 1000 ( 4 ) , 0 ( 1 )

let d_num = 47891 // TEST with -> 1000 , 0


//Q15 --> ATM MENU simulation with do...while ->
//        a menu must be SHOWN at least once before the user does anything -> that is exactly
//        what do...while guarantees ( the condition is checked AFTER the code -> notes section 8 )
//        simulate 3 rounds with a counter variable ( no prompt() -> rule at the top ) :
//        round 1 -> the "user" picks 1 ( Deposit )
//        round 2 -> the "user" picks 2 ( Balance )
//        round 3 -> the "user" picks 5 ( Exit )
//        the loop must stop when the choice is 5
//        expected ->
//        Deposit selected
//        Balance selected
//        Exit selected
//        HINT -> round and choice are already declared below
//                 INSIDE the loop : 1) SET the choice of that round with if ( round === 1 ) ...
//                 2) print the matching message   3) round++
//                 condition -> while ( choice !== 5 )

let round = 1
let choice = 0


// ------------------- SECTION E : NESTED LOOPS & PATTERNS -------------------
//
// HOW TO ATTACK A PATTERN ( interview habit -> use it for EVERY pattern ) ->
//   step 1 -> count the ROWS               -> decides the OUTER loop
//   step 2 -> count the parts of ONE row   -> spaces + symbols -> decides the INNER loops
//   step 3 -> write the FORMULA for row i  -> e.g. spaces = 5 - i , digits = 2 * i - 1
//   step 4 -> DRY RUN row 1 and row 2 on paper -> only then write the code

//Q16 --> print this pattern ( 4 rows ) -> BOTH ways
//
//        1
//        22
//        333
//        4444
//
//        PART A -> with methods -> String(i).repeat(i)
//        PART B -> WITHOUT methods -> nested loop , build every row with row += i
//        HINT -> outer loop = rows ( i from 1 -> 4 ) , the INNER loop runs i times
//                 ( a fixed inner count = every row the same length = wrong -> mistakes table )


//Q17 --> print this RIGHT ALIGNED triangle ( 4 rows ) -> each row = SPACES first , then stars
//
//        "   *"
//        "  **"
//        " ***"
//        "****"
//
//        HINT -> row i ( 1 -> 4 ) -> spaces = 4 - i , stars = i
//                 -> TWO inner loops : the first adds " " , the second adds "*"
//        NOTE -> spaces are INVISIBLE in the output -> first print with the quotes to count them ,
//                 then remove the quotes ( the quotes are NOT part of the pattern )


//Q18 --> print this number pyramid ( 5 rows ) ->
//
//        "    1"
//        "   222"
//        "  33333"
//        " 4444444"
//        "555555555"
//
//        HINT -> row i ( 1 -> 5 ) -> spaces = 5 - i , the digit i repeated ( 2 * i - 1 ) times
//                 i = 1 -> 4 spaces + 1 digit   |   i = 5 -> 0 spaces + 9 digits
//                 one inner loop for the spaces , another for the digits
//        CHECK -> the row widths grow like 5 , 6 , 7 , 8 , 9 characters -> only then it is a pyramid

// ------------------- SECTION F : break & continue -------------------

//Q19 --> ONE loop from 1 -> 30 with BOTH keywords ->
//        - CONTINUE when the number is divisible by 3 ( skip that round only )
//        - BREAK when the number is 25 ( stop the WHOLE loop )
//        print all the other numbers on ONE line , separated by a space
//        expected -> 1 2 4 5 7 8 10 11 13 14 16 17 19 20 22 23
//        THINK ( write in comments ) ->
//        a) why is 24 not printed ? -> 24 % 3 === 0 -> continue skips that round
//        b) why are 25 -> 30 not printed ? -> break exits the loop completely


//Q20 --> SEARCH + break -> find the FIRST number between 1 and 500 that is divisible
//        by BOTH 7 and 11
//        PART A -> print the number and the round in which it was found
//        PART B -> print how many rounds the loop ACTUALLY ran ( with break )
//        PART C -> write in a comment how many rounds it would run WITHOUT break
//        HINT -> divisible by both -> ( n % 7 === 0 && n % 11 === 0 ) -> think LCM ( 7 x 11 )
//        expected -> first number = 77 , rounds run = 77 , rounds without break = 500


// ------------------- SECTION G : INTERVIEW -> PREDICT THE OUTPUT ( write the answer FIRST ) -------------------

//Q21 --> INTERVIEW -> when do you choose for vs while vs do...while ? answer in 3 short lines
//        ( theory notes -> section 8 comparison table )


//Q22 --> PREDICT -> why does this hang ? write your answer FIRST , then run it CAREFULLY
//        for (let i = 0; i >= 0; i++) { console.log(i) }
//        HINT -> the direction must move towards the condition becoming FALSE ( direction trap )
//        IMPORTANT -> keep this line COMMENTED while testing this file , otherwise the
//                     assignment itself never finishes ( stop a running program with Ctrl + C )


//Q23 --> PREDICT -> what is wrong here ? ( write the answer as a comment , then prove it )
//        let name_str = "javascript"
//        for (let i = 0; i <= name_str.length; i++) { console.log(name_str[i]) }
//        HINT -> the last valid index is length - 1 -> what does name_str[name_str.length] give ?
//        -> write the CORRECT condition AND the exact output in comments


//Q24 --> PREDICT the 2 outputs ( write them FIRST , then run and verify ) ->
//        a) for (let i = 0; i <= 10; i++) { if (i === 5) break; console.log(i) }
//        b) for (let i = 0; i <= 10; i++) { if (i === 5) continue; console.log(i) }
//        HINT -> break stops EVERYTHING , continue skips only THIS round ( notes -> section 7 )


//Q25 --> PREDICT -> how many ROUNDS does each loop run ? ( write your answer FIRST -> dry run )
//        A) for (let i = 1; i <= 100; i = i * 2) { console.log(i) }
//        B) for (let i = 10; i > 0; i = i - 3) { console.log(i) }
//        HINT -> the increment is NOT i++ -> list the counter values one by one in a comment
//                 A) 1 , 2 , 4 , 8 , ... which value finally crosses 100 and stops the loop ?
//                 B) 10 , 7 , 4 , 1 , ... which is the last value printed ?
//        expected -> A) 7 rounds ( the final i = 128 )     B) prints -> 10 7 4 1  ( 4 rounds )


//Q26 --> PREDICT -> what is the FINAL value of out ? ( dry run BOTH loops )
//        let out = 0
//        for (let i = 1; i <= 5; i++) {
//            for (let j = 1; j <= 5; j++) {
//                if (j === 3) break
//                out++
//            }
//        }
//        INTERVIEW POINT -> break exits ONLY the loop it lives in -> does it also kill the OUTER loop ?
//        expected -> out = 10  ( the inner loop runs only j = 1 , j = 2 for every outer round )


//Q27 --> PREDICT -> what is the final value of total ? ( dry run 1 -> 10 )
//        let total = 0
//        for (let i = 1; i <= 10; i++) {
//            if (i % 2 === 0) continue
//            total += i
//        }
//        HINT -> continue skips ONLY that round -> total collects which numbers ?
//        expected -> total = 25  ( 1 + 3 + 5 + 7 + 9 )


//Q28 --> PREDICT -> what is stored in s at the end ? ( dry run BOTH loops -> write every append )
//        let s = ""
//        for (let i = 1; i <= 3; i++) {
//            for (let j = 3; j >= i; j--) {
//                s += j
//            }
//        }
//        HINT -> i = 1 -> appends 3 , 2 , 1   then i = 2 -> appends ?   then i = 3 -> appends ?
//        expected -> s = "321323"


//Q29 --> PREDICT + THINK ->
//        let n = 0
//        while (n < 5) {
//            n++
//            if (n === 3) continue
//            console.log(n)
//        }
//        PART A -> predict the printed lines   ( expected -> 1 2 4 5 )
//        PART B -> the interviewer now MOVES the n++ to the END of the loop ( after the if )
//                  -> predict again ... it HANGS . write in a comment exactly WHY
//                  ( the round with n = 3 skips the ONLY line that changes n -> infinite loop )


// ------------------- SECTION H : INTERVIEW -> FIX THE BUG ( the code below is WRONG ) -------------------

//Q30 --> DEBUG -> this word count prints 23 instead of 12 . find the bug ( lecture mistake 1 ) :
//        let count_str2 = "hello my name is siddhant and i am a mentor for automation"
//        let word_count = 1
//        for (let i = 0; i < count_str2.length; i++) { if (count_str2[i] === " ") { word_count++ } }
//        for (let i = 0; i < count_str2.length; i++) { if (count_str2[i] === " ") { word_count++ } }
//        console.log(word_count)
//        HINT -> the SAME counting loop is written TWICE and the counter is never reset
//        -> write the FIX in a comment ( which line must be deleted ) and the correct answer ( 12 )


//Q31 --> BUG -> it NEVER ends ( infinite loop ) -> the line that moves the condition is missing :
//        let i = 1
//        while (i <= 5) {
//            console.log(i)
//        }
//        HINT -> a while loop needs something INSIDE that pushes the condition towards false
//        FIX -> write the fixed loop and its output -> 1 2 3 4 5


//Q32 --> BUG -> it prints 1 2 3 4 but it MUST print 1 2 3 4 5 ( one round is lost ) :
//        for (let i = 1; i < 5; i++) { console.log(i) }
//        HINT -> OFF BY ONE error -> compare < with <= ( which is the last value you need ? )
//        FIX -> write the corrected condition + the output , and explain in a comment
//               why < works when the counter is an index ( i < str.length ) but NOT here


//Q33 --> BUG -> every row prints 4 stars but the triangle must GROW :
//        for (let i = 1; i <= 4; i++) {
//            let row = ""
//            for (let j = 1; j <= 4; j++) { row += "*" }
//            console.log(row)
//        }
//        HINT -> the inner loop must run the ROW'S OWN count , never a fixed number ( mistakes table )
//        FIX -> make the inner loop stop at the right place -> rows -> *  **  ***  ****


//Q34 --> BUG -> it HANGS at n = 2 ( run it carefully -> stop with Ctrl + C ) :
//        let n = 1
//        while (n <= 10) {
//            if (n % 2 === 0) continue
//            console.log(n)
//            n++
//        }
//        HINT -> the ONLY line that changes n sits AFTER the continue -> the even round jumps
//                 back to the condition without touching n -> n stays 2 forever
//        FIX -> move the n++ inside the if ( before the continue ) -> expected output -> 1 3 5 7 9


// ------------------- SECTION I : INTERVIEW -> LOGIC BUILDERS ( think first , code later ) -------------------

//Q35 --> THE MISSING NUMBER ( classic sum trick ) ->
//        the numbers 1 -> 10 are given but ONE number is missing .
//        let n = 10
//        let actualSum = 52        // the sum of the numbers that ARE present
//        print -> "Missing number = 3"
//        HINT -> two ways :
//                 1) loop 1 -> n and add -> expectedSum -> missing = expectedSum - actualSum
//                 2) you may also remember the formula n * ( n + 1 ) / 2  ( 10 * 11 / 2 = 55 )
//        TEST with -> actualSum = 52 -> 3 , actualSum = 50 -> 5 , actualSum = 55 ->
//        THINK -> what must you print when nothing is missing ? decide + write it in a comment


//Q36 --> TRAILING ZEROS IN n! ( interview favourite ) ->
//        print HOW MANY trailing zeros 10! has -> "10! has 2 trailing zeros"
//        ( 10! = 3628800 -> the answer really is 2 )
//        HINT -> a zero needs a pair 2 x 5 . inside a factorial there are ALWAYS more 2s than 5s
//                 -> so COUNT how many numbers 1 -> n are divisible by 5
//                 -> AND remember 25 contributes TWO fives ( 25 = 5 x 5 ) -> what about 125 ?
//        do NOT calculate the full factorial -> count the fives with a loop
//        TEST with -> 10 -> 2 zeros , 25 -> 6 zeros , 100 -> 24 zeros


//Q37 --> GCD + LCM ( very common interview question ) ->
//        let a = 48 , b = 18
//        PART A -> GCD ( greatest common divisor ) -> print -> "GCD = 6"
//                 HINT -> loop from 1 -> the smaller number , keep the BIGGEST value that
//                          divides BOTH ( a % i === 0 && b % i === 0 )
//        PART B -> LCM -> print -> "LCM = 144"
//                 HINT -> LCM = ( a * b ) / GCD  -> calculate it from your PART A answer
//        TEST with -> 48 & 18 ( GCD 6 , LCM 144 ) , 15 & 25 ( GCD 5 , LCM 75 )
//        BONUS -> solve the GCD with the Euclid rule ( bigger - smaller , repeat , while loop )


//Q38 --> DECIMAL -> BINARY conversion with a loop ( number systems + loops ) ->
//        let dec = 13
//        print -> "13 in binary = 1101"
//        HINT -> repeatedly % 2 gives the next bit ( 13 % 2 = 1 , then 6 % 2 = 0 , ... )
//                 and Math.floor( n / 2 ) removes that bit -> collect the bits BACKWARDS
//                 ( it is the same trick as reversing the number -> Q11 )
//        TEST with -> 13 -> 1101 , 10 -> 1010 , 255 -> 11111111
//        EDGE CASE -> dec = 0 -> the loop never runs -> what must you print ? decide + write it


//Q39 --> FIRST NON REPEATING CHARACTER ( string + nested loop interview question ) ->
//        let s1 = "javascript"
//        print -> "First non repeating character = j"
//        HINT -> the OUTER loop picks a character , the INNER loop COUNTS how many times it
//                 appears in the whole string -> the FIRST character with count === 1 wins
//                 -> use break when you found it ( no need to keep checking )
//        TEST with -> "javascript" -> j , "abracadabra" -> c
//        THINK -> "aabb" has NO non repeating character -> what must your program print ?


//Q40 --> DIGITAL ROOT -> keep summing the digits until only ONE digit is left ->
//        let dr_num = 47891
//        trail -> 47891 -> 29 -> 11 -> 2
//        print -> "Digital root of 47891 = 2"
//        HINT -> reuse the Q10 digit sum , but REPEAT it in a loop while the number >= 10
//                 -> do...while is perfect here ( a single digit must still run ONCE )
//        TEST with -> 47891 -> 2 , 999 -> 9 ( 999 -> 27 -> 9 ) , 7 -> 7

// ------------------- SECTION J : BONUS CHALLENGE ( MINI PROJECTS ) -------------------

//Q41 --> BONUS -> ARMSTRONG NUMBERS between 1 and 1000 ( one per line )
//        an Armstrong number = the sum of its own digits , each raised to the power of the
//        COUNT of digits , equal to the number itself
//        e.g. 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//        HINT -> OUTER loop 1 -> 1000 ; inside every round ->
//                 1) count the digits ( the Q14 division-by-10 trick )
//                 2) sum every digit ** digitCount  ( or Math.pow( digit , digitCount ) )
//                 3) if the sum === the number -> print it
//        expected -> 1 2 3 4 5 6 7 8 9 153 370 371 407
//        NOTE -> 1000 is NOT one -> 1^3 + 0 + 0 + 0 = 1  ( write this in a comment )


//Q42 --> BONUS ( MINI PROJECT - WORD REVERSER ) ->
//        starter -> let sentence = "loops are fun"
//        print the sentence with the WORD order reversed -> "fun are loops"
//        RULE -> do NOT use .reverse() -> build the new string with a loop
//        HINTS -> split(" ") gives you the words ( string lecture 04 )
//                 loop from the LAST word down to 0 and add word + " " to a new string
//                 watch the extra space at the END -> "fun are loops " is WRONG
//        TEST with -> "i am learning javascript" -> "javascript learning am i"

let sentence = "loops are fun"


//Q43 --> BONUS ( MINI PROJECT - HIGHER / LOWER ) -> simulate a guessing game with a loop ->
//        the secret number is 42 . the guesses are already declared below and they are used
//        IN THIS ORDER : 10 , 60 , 42
//        every round print ->  Attempt X -> guess -> too low / too high / CORRECT
//        the loop must STOP when the guess is correct
//        expected ->
//        Attempt 1 -> 10 -> too low
//        Attempt 2 -> 60 -> too high
//        Attempt 3 -> 42 -> correct ! found in 3 attempts
//        HINT -> keep an attempt counter , pick the right guess with if ( attempt === 1 ) ... else if
//                 then compare with the secret -> print the message -> attempt++
//                 stop with break ( or with the loop condition ) when the guess === secret

let secret = 42
let g1 = 10
let g2 = 60
let g3 = 42

// ============================================
// SUBMISSION CHECKLIST
// 1. every PREDICT question has your answer written BEFORE you ran the code ( dry run table )
// 2. every Q has its PLAN written as a comment BEFORE the code
// 3. every expected output / answer / observation is written in comments
// 4. ALL the TEST values given in the question were tried ( change the variable , run again )
// 5. no pattern uses a FIXED inner-loop count for every row ( spaces + digit counts change )
// 6. every while / do...while has something inside that moves the condition towards false
// 7. every fixed bug has the REASON of the bug written in a comment ( not only the fix )
// 8. file runs without any error and without hanging -> node 09_ASSIGNMENT_JS_LOOPS.js
// ============================================