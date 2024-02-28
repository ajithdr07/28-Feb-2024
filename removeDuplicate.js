/**
 * 3. write a function to remove the duplicate
 *    element from an array
 */

function removeDuplicate(arr) {
  const obj = {};
  const result = [];
  arr.forEach((ele) => {
    if (!obj[ele]) {
      result.push(ele);
      obj[ele] = true;
    }
  });

  return result;
}

const arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 8, 9, 10, 12, 11, 6];
console.log(removeDuplicate(arr));
