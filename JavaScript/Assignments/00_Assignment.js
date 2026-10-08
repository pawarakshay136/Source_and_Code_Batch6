//Q4 --> FACTORS -> print every factor of the number ( starter -> let factN = 60 )
//        one factor per line , in increasing order
//        HINT -> f is a factor of n when n % f === 0 -> loop f from 1 -> n
//        BONUS -> also print the SUM of all the factors
//        TEST with -> 60 ( factors sum = 168 ) , 13 ( prime -> only 1 and 13 -> sum = 14 )
//                      28 ( a PERFECT number -> sum of the factors WITHOUT 28 itself = 28 -> why ? )

console.log("<-------------------- Q4 ------------------------------------>")

let factN = 60 // TEST with -> 13 , 28
let factSum = 0

for( let i = 1; i <= factN; i++){
    if(factN % i === 0){
        console.log(i)
        factSum = factSum + i
        }
}
console.log(`Fact Sum is :- ${factSum}`) 
       
   
