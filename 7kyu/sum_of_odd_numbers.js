//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let start = n * (n-1) + 1
  let sum = 0
	for(let i = 0; i < n; i++){
    sum += start + (i * 2)
}
  return sum
}

// Best answer
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// Another answer
function rowSumOddNumbers(n) {
  return n*n*n
}


// 
let rowSumOddNumbers = n => n ** 3;