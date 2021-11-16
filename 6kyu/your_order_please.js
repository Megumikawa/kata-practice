// Your task is to sort a given string. 
// Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

// Example:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
  if(words.length == 0) {return words}
  let wordsArr = words.split(' ');
  let indexArr = words.match(/\d/g);
  let newWord = [];
  for(let i = 1; i <=indexArr.length;i++){
    let number = indexArr.indexOf(i.toString())
    newWord.push(wordsArr[number])
  }
  return newWord.join(' ');
}

// const order = words => {
//   if(words){
//     let finalArr = [];
//     words.split(' ').forEach(word => {
//       let index = Number(word.match(/\d+/g));
//       finalArr[index -1] = word
//     })
//     return finalArr.join(' ')
//   }
//   return words
// }


// clever answer
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}


function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ')
}