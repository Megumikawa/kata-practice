// Write a function which will accept a sequence of numbers and calculate the variance for the sequence.

// The variance for a set of numbers is found by subtracting the mean from every value, 
// squaring the results, adding them all up and dividing by the number of elements.

// For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].
// mean = (1 + 2 + 2 + 3) / 4
// => 2

// variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
// => 0.5
var variance = function(numbers) {
  const mean = numbers.reduce((a,b) => a + b) / numbers.length
  return numbers.map(n => Math.pow(n-mean, 2)).reduce((a,b) => a + b) /numbers.length
};


// Another answer
const variance = ns => {
  const mean = ns.reduce((s, n) => s + n) / ns.length;
  return ns.reduce((v, n) => v + (n - mean) ** 2, 0) / ns.length;
}

// answer
var variance = function(numbers) {
  var mean = numbers.reduce(function (prev, v) { return prev + v }) / numbers.length
  return numbers.reduce(function (prev, v) { return prev + Math.pow(v - mean, 2) }, 0) / numbers.length
};