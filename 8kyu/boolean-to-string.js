// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  if(b === true) {
    return "true"
  } else {
    return "false"
  }
}

// Other answer
function booleanToString(b){
  return b.toString();
}

// Another answer
function booleanToString(b){
  return b ? 'true' : 'false';
}