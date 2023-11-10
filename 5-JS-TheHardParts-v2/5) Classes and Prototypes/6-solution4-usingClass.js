// as compared to solution 3, NOTHING has changed under the hood, we just get to do these two separate declarations or assignments in one construct. We call a class

// In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

// declaring as class instead of function
class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}

const user1 = new userCreator("Eva", 9);

console.log("before increment");
console.log("user1:", user1);
user1.increment();
console.log("after increment");
console.log("user1:", user1);

// additional note: always use this method to create a new class from a function
