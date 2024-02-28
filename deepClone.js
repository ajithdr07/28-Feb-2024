/**
 * 13. Implement a deep clone(copy) function in JavaScript that
 *     creates a copy of a nested object or array without any
 *     reference to the original.
 */

function deepClone(obj) {
  if (Array.isArray(obj)) {
    const result = [];
    for (let i = 0; i < obj.length; i++) {
      result.push(deepClone(obj[i]));
    }
    return result;
  } else if (typeof obj == "object" && obj != null) {
    console.log(obj);

    const result = {};
    for (const key in obj) {
      result[key] = deepClone(obj[key]);
    }
    return result;
  } else {
    return obj;
  }
}

const arr = [37, 3700, { hello: "world" }];
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

// const clonedObj = deepClone(obj);

// clonedObj.b.c = 3;
// console.log(obj);
// console.log(clonedObj);

// const clonedArr = deepClone(arr);
// clonedArr[2].hello = "hi";

// console.log(arr);
// console.log(clonedArr);
