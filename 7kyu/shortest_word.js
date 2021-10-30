// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
  let words = s.split(' ')
  let shortest = words[0]
  for(let i = 0; i < words.length; i++){
      if(words[i].length < shortest.length) {
        shortest = words[i]
      }
    }
  return shortest.length
  }

  // Best answer
  function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }


  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;
