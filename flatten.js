/**
 * 7. write a function to flatten the nested array
 */

function flat(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [
  1,
  2,
  3,
  4,
  [5, 6, 7, [8, 9, "hi", 11], undefined, 13],
  14,
  true,
  16,
  [17, [null, 19, [{ x: 5 }]]],
  21,
];

console.log(flat(arr));
