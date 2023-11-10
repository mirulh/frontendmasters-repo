// The new keyword automates a lot of our manual work
// it is important to note that function is in ACTUALITY a function and an object at the same time

function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

// every function that is created has a object prototy  pe that is empty. To store any value or data inside the object is by using the keyword .prototype.label = value / function as shown below (also refer to next picture to see in the console)

userCreator.prototype.increment = function () {
  this.score++;
}; // inserting a function property into the object named, increment
// the "increment" property is inserted into prototype

userCreator.prototype.login = function () {
  console.log("log in");
}; // inserting a function property into the object named, login

userCreator.prototype.status = "win";

const user1 = new userCreator("Eva", 9);

console.log("Before increment:");
console.log(user1);

user1.increment();
console.log("After increment");
console.log(user1);

/* EXP: In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. */

// It is important to note that, a programmer must know about the "new" keyword beforehand to use the and replicate the function, This makes this method slightly undesirable to implement
