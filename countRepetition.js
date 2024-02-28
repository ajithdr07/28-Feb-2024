/**
 * 14. write a function to find how many times an elements are
 *     repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and
 *     in string "abcdaabdlfjl'
 */

function countRepetitions(elements) {
  const countObj = {};
  for (let ele of elements) {
    if (countObj[ele]) {
      countObj[ele] += 1;
    } else {
      countObj[ele] = 1;
    }
  }

  return countObj;
}

console.log(countRepetitions([1, 2, 3, 3, 5, 2, 1, 7, 6, 8, 7, 8]));
console.log(countRepetitions("abcdaabdlfjl"));
