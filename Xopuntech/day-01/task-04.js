// 4. Using a loop, reverse a string without using .reverse() ?

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage
const input = "hello";
console.log(reverseString(input));  // Output: "olleh"
