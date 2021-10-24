// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(str) {
  return str.split('').map((a, i) => (a.toUpperCase() + a.toLowerCase().repeat(i))).join('-');
}

// Another answer
function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

function accum(s) {
  var array = [];
  for (i = 0; i < (s.length); i++) {
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  };
  return array.join("-");
}