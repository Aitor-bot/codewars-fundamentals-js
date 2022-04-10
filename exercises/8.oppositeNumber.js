// ****** 8 ******
/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

// My solution

const opposite = (number) => {

    if (number > 0) {
        return -Math.abs(number);
    }
    else {
        return Math.abs(number);;
    }
}


// Best Codewars solution

function opposite(number) {
    return (-number);
}

const opposite = number => -number;

function opposite(number) {
    return number * (-1);
}