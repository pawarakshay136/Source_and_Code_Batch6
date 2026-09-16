let amount = 1234.56789

// Multiply by 100, round the number, then divide by 100
let roundedAmount = Math.round(amount * 100) / 100

console.log(roundedAmount)

// Compare with toFixed(2)
let fixedAmount = amount.toFixed(2)

console.log(fixedAmount)

console.log(typeof roundedAmount)
console.log(typeof fixedAmount)

// javascript string practice