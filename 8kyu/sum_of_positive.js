// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20



const positiveSum = (arr) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      count += arr[i]
    }
  }
  return count;
}

// Another way
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// Another way
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);