// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  if(array.length === 0) {
    return 0;
  }
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

// Another answer
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

// Another
function find_average(array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}

function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}