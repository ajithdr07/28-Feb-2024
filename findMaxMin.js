/**
 * 1. Find a 2nd maximum and Minimum number in an array
 */

function findSecondMaxAndMin(arr) {
  let largest = -Infinity;
  let smallest = Infinity;
  let secLargest, secSmallest;

  arr.forEach((ele) => {
    if (ele > largest) {
      secLargest = largest;
      largest = ele;
    } else if (ele > secLargest) {
      secLargest = ele;
    }

    if (ele < smallest) {
      secSmallest = smallest;
      smallest = ele;
    } else if (ele < secSmallest) {
      secSmallest = ele;
    }
  });

  secLargest = secLargest != -Infinity ? secLargest : undefined;
  secSmallest = secSmallest != Infinity ? secSmallest : undefined;
  return { secLargest, secSmallest };
}

const arr = [10];
console.log(findSecondMaxAndMin(arr));
