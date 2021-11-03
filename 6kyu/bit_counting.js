// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


const countBits = (n) => {
  const base = (n).toString(2).split('')
  const total = base.reduce((sum, num) => sum + Number(num), 0)
  return total
};


// Best answer
countBits = n => n.toString(2).split('0').join('').length;

const countBits = n => n.toString(2)
  .split('')
  .filter(ele => ele == 1)
  .length