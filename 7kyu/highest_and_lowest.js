// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
  const array = numbers.split(" ").map(Number).sort((a,b) => b - a)
  return array[0] + " " + array[array.length - 1]
}
  

// Another answer
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}