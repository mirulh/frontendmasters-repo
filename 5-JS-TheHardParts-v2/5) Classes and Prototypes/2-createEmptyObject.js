// This is a DRY approach (not recommended in implementation)

const user3 = Object.create(null);

user3.name = "Will";
user3.lastName = "Setance";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};

user3.increment();

console.log(user3);
