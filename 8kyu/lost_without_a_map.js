// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

const maps = (x) => {
  const double = x.map((x) => {
    const doubleNumber = x * 2
    return doubleNumber;
  })
  return double;
}

// Answer

const maps = (x) => {
  return x.map(n => n * 2)
}