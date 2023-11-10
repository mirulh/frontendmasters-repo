// we could generalize our function - so we pass in our specific instruction only when we run copyArrayAndManipulate

function copyArrayAndManipulate(array, instruction) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

console.log(result);

// in the code above, instruction can be anything that we defined,that return values based of any arithmetic operation and push into the empty array

// reference: https://frontendmasters.com/courses/javascript-hard-parts-v2/higher-order-functions/
