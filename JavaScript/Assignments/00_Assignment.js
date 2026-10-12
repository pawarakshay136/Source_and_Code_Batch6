// Initialize variable
let n5 = 0

// Repeat while n5 is less than 5
while (n5 < 5) {

    // Skip when n5 is 3
    if (n5 === 3) {
        n5++       // Increase n5 by 1
        continue   // Skip remaining code
    }

    // Print current value
    console.log(n5)

    // Increase n5 by 1
    n5++
}