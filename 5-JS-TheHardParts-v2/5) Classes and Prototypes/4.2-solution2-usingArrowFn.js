// Solution 2: Using arrow function

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    const add1 = () => {
      this.score++; // "this" in the arrow function refers to user1 instead of global object
      console.log(this);
    };
    add1();
  },
  logIn: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Timmy", 9);
const user2 = userCreator("Todd", 10);

user1.increment();
console.log(user1.increment); // how to call
console.log(user1);

console.log(
  `This is user1: ${JSON.stringify(user1)}\nThis is user2: ${JSON.stringify(
    user2
  )}`
);

console.log(user1.hasOwnProperty("score")); // return true
