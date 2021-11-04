// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function that determines whether a string 
// that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)


function isIsogram(str){
  if(str.isEmpty){
    return true
  } else {
    str = str.toLowerCase()
  }
  let arr = str.split('')
  let sortArr = arr.slice().sort()
  for(let i = 0; i < arr.length; i++) {
    if(sortArr[i + 1] ==sortArr[i]) {
      return false
    }
  }
  return true
}


// best answer
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

// Another answer
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

// clever answer
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}