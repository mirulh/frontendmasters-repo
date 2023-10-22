/*Exercise

In the console, declare the following functions:

    multiply: given 2 numbers, return their product
    yell: given a lowercase string, log it in all caps to the console
    longerThan: given 2 arrays, return whether the first is longer than the second

*/

// multiply

function multiply(x, y) {
  return x * y;
}

const multiplied = multiply(2, 3);
// console.log(multiplied);

// yell

function yell(x) {
  const uppercase = x.toUpperCase();
  console.log(uppercase);
}

const ucString = yell("i don't care what you put here!");

// longerThan

function longerThan(arr1, arr2) {
  return arr1.length > arr2.length;
}

//or
// function longerThan(x, y) {
//   if (x.length > y.length) {
//     return "the first is longer";
//   } else {
//     return "the second is longer";
//   }
// }

const result = longerThan([1, 2, 3], [1, 1, 1, 1]);
console.log(result);
