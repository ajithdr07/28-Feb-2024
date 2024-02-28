/**
 * 8. Write a function to find the 2nd largest number in a nested array
 */

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secLargest;

  function find(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        secLargest = find(arr[i]);
      } else if (arr[i] > largest) {
        secLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secLargest) {
        secLargest = arr[i];
      }
    }

    return secLargest;
  }

  return find(arr);
}

const arr = [1, 2, 3, [-1, 10, [15, -3], 6, 0, -2], 10, -10];
console.log(findSecondLargest(arr));
