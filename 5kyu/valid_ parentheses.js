// Write a function that takes a string of parentheses, and determines 
// if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
  let singleParens = 0;
  for(let i = 0; i < parens.length; i++) {
    if(parens.charAt(i) == '('){
      singleParens += 1;
    } else {
      singleParens -= 1;
    }
    if (singleParens < 0) {
      return false
    }
  }
  if (singleParens === 0) {
    return true
  } else{
    return false
  }
}





// Best answer
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  return n == 0;
}
