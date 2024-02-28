/**
 * 4. write a function to remove duplicate elements
 *    in a string "HelloWorld"
 */

function removeDuplicate(str) {
  const obj = {};
  let result = "";
  for (let ch of str) {
    if (!obj[ch]) {
      result += ch;
      obj[ch] = true;
    }
  }
  return result;
}

console.log(removeDuplicate("HelloWorld"));
