/**
 * 11. Reverse a string a without using built in method
 */

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

console.log(reverseString("HelloWorld!"));
