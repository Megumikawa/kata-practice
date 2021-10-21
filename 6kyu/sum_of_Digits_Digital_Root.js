// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
//  continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n){
  if(n < 10) return n;
  return digital_root((n + '').split('').reduce((acc, val) => acc + +val,0))
}


// Clever answer
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}


function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
    
  return digital_root(sum);
}