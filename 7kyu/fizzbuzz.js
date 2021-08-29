// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

let fizzbuzz = (n) => {
  if (n % 3 == 0) {
    return "Fizz";
  } else if (n % 5 == 0) {
    return "Buzz";
  } else if (n % 15 == 0) {
    return "FizzBuzz";
  }
}