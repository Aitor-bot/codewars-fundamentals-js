// ****** 4 ******
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// My solution

function abbrevName(name) {

  const firstWord = name.charAt(0);
  const secondWord = name.charAt(name.indexOf(' ') + 1);
  const res = firstWord.toUpperCase() + "." + secondWord.toUpperCase();
  return res;
}

// Best Codewars solution

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}