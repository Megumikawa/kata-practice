// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  for(let i=0; i<str.length; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}


// Anotehr answer
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a","e","i","o","u"]
  for(let i = 0; i < str.lenght; i++) {
    for(let j = 0; j < vowels.lenght; j++){
      if(str[i]=== vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

// Anotehr answer
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// Best answer
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}