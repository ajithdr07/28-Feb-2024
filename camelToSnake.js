/**
 * 5. Write function to convert camelCase to snake_case
 */

function camelToSnake(str) {
  let result = "";
  for (let ch of str) {
    if (ch == ch.toUpperCase()) {
      result += "_" + ch.toLowerCase();
    } else {
      result += ch;
    }
  }
  return result;
}

console.log(camelToSnake("convertToSnake"));
