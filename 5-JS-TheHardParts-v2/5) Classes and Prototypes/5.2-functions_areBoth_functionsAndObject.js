//  interlude - functions are both objects and functions

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
multiplyBy2(3);
console.log("MultiplyBy(3) =", multiplyBy2(3));
console.log("\n");
console.log("Function can act like an object to store property");
console.log("MultiplyBy2.stored =", multiplyBy2.stored);
console.log("\n");
console.log("MultiplyBy2 also stored prototype");
console.log("multiplyBy2.prototype =", multiplyBy2.prototype);

// what is the prototype property default to be? - an empty Object
