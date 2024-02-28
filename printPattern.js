/**
 * 9. write a function to generate below pattern
	1
	2 9
	3 8 10
	4 7 11 14
	5 6 12 13 15
 */

function printPattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j == 1) {
        str += i;
      } else if (j % 2 == 0) {
        let lastColVal = getLastColumnValue(n, j - 1);
        str += " " + (lastColVal + (n - i) + 1);
      } else {
        let lastColVal = getLastColumnValue(n, j - 1);
        str += " " + (lastColVal + (i - j) + 1);
      }
    }
    if (i < n) {
      str += "\n";
    }
  }
  console.log(str);
}

function getLastColumnValue(rows, col) {
  let n = rows;
  for (let i = 1; i < col; i++) {
    rows += n - 1;
    n--;
  }
  return rows;
}

printPattern(5);
