// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


function stringToArray(stirng) {
	return String.split(' ')
}

// Another answer
const stringToArray = string => string.split(' ');