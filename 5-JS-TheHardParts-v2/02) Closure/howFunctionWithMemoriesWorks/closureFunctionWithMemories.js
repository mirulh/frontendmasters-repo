function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

// in this example the function stores memory inside the variable increment. Every time the 'increment' is called the output is incremented by 1

// read more > https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
