### Reference link >> https://frontendmasters.com/courses/javascript-first-steps/functions-parameters-arguments/

## Parameters and Arguments

// How function works with variable

function calculateHalf(x) {
return x / 2;
}

let half = calculateHalf(20);

console.log(half);

// Using parameter and argument with a function

// Some functions need more than value to work

function add(x, y) {
// x and y are the PARAMETERS of the function add
return x + y;
}

add(2, 3); // 2 and 3 are the ARGUMENTS passed to the function

console.log(add(2, 3));
