/**
 * 10. program for adding zeros after 3 values in array 
	Example: [1, 2,3,4,5,6,6,7,8]
	Output: [1, 2,3,0,4,5,6,0,6,7,8,0]
 */

function addZero(arr) {
  let index = 0;
  const result = [];
  while (index < arr.length) {
    result.push(...arr.slice(index, index + 3));
    index += 3;
    if (index <= arr.length) {
      result.push(0);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8];
console.log(addZero(arr));
