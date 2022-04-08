// ****** 2 ******
/*
Description:
Write a function called repeatStr which repeats the given string string exactly n times.
*/

const repeatStr = (n, s) => 
{
    let res = "";
    for (let x = 0; x < n; x++)
    {
        res = res + s
    }
    return res;
}


// Best 

function repeatStr (n, s) {
    return s.repeat(n);
  }