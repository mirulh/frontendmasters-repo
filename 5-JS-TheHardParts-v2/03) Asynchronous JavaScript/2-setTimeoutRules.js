// To determine the sequences of setTimeout() and console.log

// Which one will be log out first?

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000); // log out last
console.log("Me first!"); // log out first

// --------------------------------------comment the above to use below

function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 0); // log out last
console.log("Me first!"); // log out first

// --------------------------------------comment the above to use below

function printHello() {
  console.log("Hello");
}
function blockFor1Sec() {}
setTimeout(printHello, 0); // log out last
blockFor1Sec(console.log("when?")); // log out first
console.log("Me first!"); // log out second
