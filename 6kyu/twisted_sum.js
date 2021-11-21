// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10
// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  let sum = 0;
  for(let i = 0; i <= n; i++) {
    let numStr = i.toString();
    if(numStr.length === 1) {
      sum += (+numStr)
    } else {
      let subArr = numStr.split('');
      subArr.forEach(digit => {
        sum += (+digit)
      })
    }
  }
  return sum;
}

// Another answer
function twistedSum(n,sum=0) {
  for(let i = 1; i <= n; i++)
    sum += (i < 10)?i:i.toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))
  return sum
}

function twistedSum(n) {
  return [...Array(n + 1).keys()].reduce((a, b) => a + [...""+b].reduce((x, y) => x + +y, 0), 0);
}