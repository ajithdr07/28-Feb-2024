/**
 * 2. Sort an array without using built in methods
 */

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [1, 2, 9, 3, 8, 11, 6, 5];
console.log(sort(arr));
