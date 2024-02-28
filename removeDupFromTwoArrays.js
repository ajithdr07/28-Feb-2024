/**
 * 20. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
 */

function removeDuplicates(arr1, arr2) {
  const obj = {};
  const result = [];
  for (let ele of arr1) {
    if (!obj[ele]) {
      result.push(ele);
      obj[ele] = true;
    }
  }

  for (let ele of arr2) {
    if (!obj[ele]) {
      result.push(ele);
      obj[ele] = true;
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 4, 5], [5, 3, 7, 8, 9]));
