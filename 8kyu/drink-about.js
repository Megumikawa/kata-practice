// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


function peopleWithAgeDrink(age) {
  let message = ""
  if(age < 14) {
    message = "drink toddy"
  } else if(age < 18) {
    message = "drink coke"
  } else if(age < 21) {
    message = "drink beer"
  } else if(age >= 21) {
    message = "drink whisky"
  } 
  return message;
}

// Best answer
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

// Another answer
const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')