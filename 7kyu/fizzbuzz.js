// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

const fizzbuzz = (n) => {
  const returnedArr = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    if(i % 3 == 0){
      str += "Fizz";
    } if (i % 5 == 0) {
      str += "Buzz";
    } if (str.length === 0) {
      returnedArr.push(i);
    } else {
      returnedArr.push(str);
    }
  }
  return returnedArr;
}




// ----------Best Answer----------
// fizzify = fizzbuzz;
// function fizzbuzz(n) {
//   return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
// }

// ----------Best Answer----------
// var fizzify = fizzbuzz = function(n)
// {
//   return Array.apply(null, new Array(n)).map(function(e, i){
//     return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
//   }); 
// }


// ----------Another Answer----------
// function fizzbuzz(n)
// {
//   //declare the array variable
//   var list = []; 
//   //declare for loop
//   for (let i=1 ; i<=n ;  i++)
//   //When number is divisible by both 3 & 5
//   {
//     var num = "";
//     if ( i % 3 == 0 && i % 5 == 0 ) {
//       num ="FizzBuzz"
//       list.push(num);
//       }
//     //When a number is divisible by three only
//     else if ( i % 3 == 0 ) {
//       num ="Fizz";
//       list.push(num);
//       }
//     //When a number is divisible by five only
//     else if (i % 5 == 0){
//       num = "Buzz";
//       list.push(num);
//     }  
//     //When a number isn't divisible by either
//     else {
//       num = i;
//       list.push(i)};
//    ;
//   }
//   // return the list
//   return list;
 
// }