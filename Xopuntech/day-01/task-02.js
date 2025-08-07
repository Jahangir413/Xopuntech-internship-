// 2. Write a function to check whether a number is prime or not ?

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prime number function
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Ask the user
rl.question("Enter a number to check if it's prime: ", function(input) {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        if (isPrime(number)) {
            console.log(` ${number} is a prime number.`);
        } else {
            console.log(`${number} is not a prime number.`);
        }
    }

    rl.close();
});
