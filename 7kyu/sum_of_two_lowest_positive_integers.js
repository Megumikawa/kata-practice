// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
  let newArr =numbers.sort((a, b) => a - b)
  let sum = 0
  for(let i = 0; i < newArr.length; i++){
    sum = newArr[0] + newArr[1]
  }
  return sum
}

// my another answer
const sumTwoSmallestNumbers = (numbers) => {
  const newArr = numbers.sort((a, b) => a - b);
  return newArr[0] + newArr[1]
}


// clever answer
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y)