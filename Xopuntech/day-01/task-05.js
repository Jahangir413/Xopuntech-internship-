// 5. Create a function that returns the sum of all even numbers in an array
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // Output: 12
