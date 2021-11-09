// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let result = ''
  for(let i = 0; i < x.length; i++) {
    if(x[i] !== " ") {
      result += x[i]
    }
  }
  return result
}


// Another answer
function noSpace(x){return x.split(' ').join('')}