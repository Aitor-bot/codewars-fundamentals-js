// ****** 3 ******
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){

    const firstWord = name.charAt(0)
    const secondWord = name.charAt(name.indexOf(' ') + 1);
    const letters = firstWord + "." + secondWord
    const res = letters.toUpperCase()
    return res;
  
  
  }