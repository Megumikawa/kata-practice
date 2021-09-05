// Sum all the numbers of the array (in F# and Haskell you get a list) 
// except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, 
// even if there are more than one with the same value!)

// Example:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6



const sumArray = array => {
  if(!array){
    return 0
  }
  let sum = 0;
  array.sort((a,b) => a - b).forEach((a, i) => {
    if(i !== array.length - 1 && i !== 0) {
      sum += a
    }
  })
  return sum
}

// Another answer
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

