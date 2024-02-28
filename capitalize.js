/**
 * 15. write a function to capitalize the each words first letter to capital 
    Ex : ['abc','def','ghi']
	output : ['Abc', 'Def','Ghi"]
 */

function capitalize(arr) {
  return arr.map((word) => word[0].toUpperCase() + word.slice(1));
}

console.log(capitalize(["abc", "def", "ghi"]));
