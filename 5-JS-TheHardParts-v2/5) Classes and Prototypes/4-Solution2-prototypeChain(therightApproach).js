// Solution 2: Using the prototype chain

function userCreator(name, score) {
  // this property will be hidden inside the user1 called, __proto__ (can be viewed in the console)
  const newUser = Object.create(userFunctionStore); // the argument that Object.create accepts is always sought in the __proto__
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// By creating the function method userFunctionStore - increment function, in a separate code block allows us to reduce redundancy and eliminate unnecessary function call like in the previous example

const userFunctionStore = {
  increment: function () {
    this.score++; // "this" here is the object name, in this case, it's user1, user2, user3
    // cont, it would implicitly equates to user1.score++, user2.score++ and such
  },
  logIn: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Timmy", 9);
const user2 = userCreator("Todd", 10);

user1.increment();
console.log(user1.increment); // the function increment exist in the user1 object
console.log(user1);

console.log(
  `This is user1: ${JSON.stringify(user1)}\nThis is user2: ${JSON.stringify(
    user2
  )}`
);

// Additional info

// but what if we want to confirm our user1 has the property score - using Object.prototype - hasOwnProperty

console.log(user1.hasOwnProperty("score")); // return true
