// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening.

// flatten([1,2,3]) => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]])  => [[1,2,3]]


const flatten = (arr) => {
  let result = [];
  arr.forEach(i => {
    result = result.concat(i)
  })
  return result
}

// Best solution
let flatten = (arr) => {
  return [].concat.apply([],arr);
}


// Another solution
let flatten = function (arr) {
  return arr.reduce(function(a,b) {
    return a.concat(b)
  }, []);
}

