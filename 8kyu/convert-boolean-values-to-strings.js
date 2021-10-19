// Complete the method that takes a boolean value and 
// return a "Yes" string for true, or a "No" string for false.


// my answer
function boolToWord( bool ){
  if(bool === true){
    return 'Yes'
  } else {
    return 'No'
  }
}

// My answer
const boolToWord = (bool) => bool === true ? 'Yes' : 'No';