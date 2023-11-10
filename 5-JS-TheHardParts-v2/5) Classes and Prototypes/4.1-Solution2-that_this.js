// Solution 2: adding another function inside a function with a name

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// adding nested function when we want to run another function as soon as increment function is executed. A valid and acceptable reason to do this.
const userFunctionStore = {
  increment: function () {
    const that = this;
    function add1() {
      that.score++;
    }
    add1();
  },
  logIn: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Timmy", 9);
const user2 = userCreator("Todd", 10);

user1.increment();
console.log(user1);

console.log(
  `This is user1: ${JSON.stringify(user1)}\nThis is user2: ${JSON.stringify(
    user2
  )}`
);

console.log(user1.hasOwnProperty("score")); // return true

console.log(user1.increment.call(user1)); // undefined, "this" here refers to global object
//add1 does not exist in the user1 object
// console.log("result after call:", user1);

// to fix this problem use that to change the pointer of this into the local object
