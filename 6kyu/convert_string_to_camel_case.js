// Complete the method / function so that it converts dash / underscore delimited words into camel casing.
// The first word within the output should be capitalized only
// if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




// clever answer
function toCamelCase(str) {
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
      });
}

// Another answer
function toCamelCase(str){
  var strArray;
  if (str.indexOf('-') !== -1){ //if delineated by -
    strArray = str.split('-');
  } else {
    strArray = str.split('_');  //if delineated by _
  }
  var camelCase = strArray[0]; //keeps first word value as is
  for (var i=1, len=strArray.length; i < len; i++){
    var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
}