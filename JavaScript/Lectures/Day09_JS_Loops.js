// count the number vowels in any given given string ("aeiou")

let str = "Hello World";
let vowels = "AEIOUaeiou";
let count = 0;
console.log(str.length) // 

for (let i = 0; i < str.length; i++) {

    if (vowels.includes(str.charAt(i))) {
        count++;
    }
}

console.log("Number of vowels:", count);
