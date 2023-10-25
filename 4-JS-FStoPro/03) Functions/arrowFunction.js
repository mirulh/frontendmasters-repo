// The => "fat arrow" lets us create an unnamed function without much code

(x, y) => x + y; // aka an arrow function

// since arrow functions are expressions, we can  assign them to a variable

const add = (x, y) => x + y;

console.log(add(1, 2));

// !! IS EQUIVALENT TO !!

function add2(x, y) {
  return x + y;
}

console.log(add2(2, 3));

// notice how the arrow function does not include the word 'return' in it

// ________________WHEN TO USE ARROW FUNCTION - WHEN WE JUST WANT TO RETURN A VALUE____________________________________

// arrow function are great when we just want to return a value (when we only have one thing in the function that is RETURN) Eureka!

// compare this
function square(x) {
  return x * x;
}

console.log(square(3));

// vs this

const square2 = (x) => x * 2;

console.log(square2(5));

// ________________WHEN WE NEED TO DO MORE THAN RETURN A VALUE - USE CURLY BRACES____________________________________

const addAndLog = (x, y) => {
  let sum = x + y;
  console.log("The sum is: ", sum);
  return sum;
};

// ________________PARENTHESES IN ARROW FUNCTION____________________________________

// for one-parameter functions, parentheses are optional

// this
(x) => x * x;

// is equivalent to this
(x) => x * x;

// for multiple parameters, parentheses are required

(firstName, lastName) => firstName + " " + lastName;
