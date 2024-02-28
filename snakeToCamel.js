/**
 * 6. Write function to convert from snake_case to camelCase
 */

function snakeToCamel(str) {
  let result = "";
  const arr = str.split("_");

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      result += arr[i][0].toUpperCase() + arr[i].slice(1);
    } else {
      result += arr[i];
    }
  }
  return result;
}

console.log(snakeToCamel("convert_to_camel"));
