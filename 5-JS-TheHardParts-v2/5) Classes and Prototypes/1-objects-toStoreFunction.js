// This is a DRY approach (not recommended in implementation)

const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment();

console.log(user1);

const user2 = {};

user2.name = "Tim";

user2.score = 6;

user2.increment = function () {
  user2.score++;
};

user2.increment();
console.log(user2);
