// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace 
// the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  let i = 0;
  let result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

// Clever answer
function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}

// Another answer
function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}