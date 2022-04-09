// ****** 2 ******
/*
Description:
Write a function called repeatStr which repeats the given string string exactly n times.
*/

// My solution

const repeatStr = (n, s) => {
    let res = "";
    for (let x = 0; x < n; x++) {
        res = res + s
    }
    return res;
}


// Best Codewars solution

function repeatStr(n, s) {
    return s.repeat(n);
}