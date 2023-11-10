// This is the non-DRY approach to create object but is still unusable and inefficient

// Problem: It is because we are storing the same function twice

// Generate objects using a function

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator("James", 9);
const user2 = userCreator("Lily", 10);
user1.increment();

console.log(
  `This is user1: ${JSON.stringify(user1)}\nThis is user2: ${JSON.stringify(
    user2
  )}`
);

// Explanation on why declaring a function inside an object is unfavorable:

/*The code you provided creates user objects using a factory function called userCreator. While this approach does work, it is considered inefficient for a few reasons:

    Redundant Function Creation: Every time you call userCreator, it creates a new increment function in memory. Even though the function logic is the same for all instances, each object created by userCreator gets its own separate copy of the increment function. This can lead to unnecessary memory consumption when you have many user objects.

    Memory Usage: Storing methods (functions) within each object created by userCreator consumes memory for each instance. If you have a large number of user objects, this can add up and lead to higher memory usage. 
    
*/
