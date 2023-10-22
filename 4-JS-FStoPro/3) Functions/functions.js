// ___________________________FUNCTION_______________________________________________

//  How function works with variable

function calculateHalf(x) {
  return x / 2;
}

let half = calculateHalf(20);

console.log(half);

// _________________________PARAMETER AND ARGUMENT_________________________________________________

// Using parameter and argument with a function

// Some functions need more than value to work

function add(x, y) {
  // x and y are the PARAMETERS of the function add
  return x + y;
}

add(2, 3); // 2 and 3 are the ARGUMENTS passed to the function

console.log(add(2, 3));

// __________________________FUNCTION WITH NO VALUES________________________________________________

// some function don't even need any values

function getRandomNumber() {
  return Math.random(); // return a random number between 0 and 1
}

console.log(getRandomNumber());

// __________________________RULES OF PASSING PARAMETER________________________________________________

// Parameters should be named like variables, and behave like variables within a function body

// This does not work because it is not a valid variable name; it is a string
// function doesThisWork("literally a value") {
//     return true;
// }

/* This does not work too because it is not a valid variable name; the name starts 
with a number and a has special character */

// function howAboutThis(1weirdVariable!) {
//     return true;
// }

function tryThisToo(legitVariableName) {
  return true;
}

console.log(tryThisToo());

// Other instances of unexpected behavior of js for example:

function getRandomNumber2() {
  return Math.random();
}

/* despite the weird variable name, the function getRandomNumber is still working since 
the argument "unexpected behavior" is not used in the function body */

console.log(getRandomNumber2("unexpected behavior"));
