// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except 
// for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  let evenArr = []
  let oddArr = []

  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 == 0) {
      evenArr.push(integers[i])
    } else {
      oddArr.push(integers[i])
    }
  }
  if(evenArr.length == 1) {
    return evenArr[0]
  } else {
    return oddArr[0]
  }
}

// Best answer
function findOutlier(int){
  const even = int.filter(a => a % 2 == 0);
  const odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}


// Another answer
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}
