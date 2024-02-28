/**
 * 16. write a function to calculate the sum of total marks 
 *     in an array of objects 
	   ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]
 */

function calculateSum(arr) {
  return arr.reduce((sum, subject) => {
    return sum + subject.marks;
  }, 0);
}

const arr = [
  { sub: "Maths", marks: 60 },
  { sub: "Science", marks: 70 },
  { sub: "English", marks: 90 },
];
console.log(calculateSum(arr));
