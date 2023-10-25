const spices = [
  { named: "Emma", nickname: "Baby" },
  { named: "Geri", nickname: "Ginger" },
  { named: "Mel B", nickname: "Scary" },
  { named: "Mel C", nickname: "Sporty" },
  { named: "victoria", nickname: "Posh" },
];

// 1. how to easily create a variable on a specific object properties of an array
let { nickname, named } = spices[0]; // the order does not matter

// object properties are not ordered as compared to array items
console.log("The name is", named, "and nickname is:", nickname);

// 2. we can also omit other value we don't need

const heroes = [
  { alias: "Rogers", aka: "Captain" },
  { alias: "Stark", aka: "Shell head" },
];

let { aka } = heroes[1]; // alias of [2] is ignored

console.log(aka, "is what they call him");

// 3. destructuring arrays by assigning variables

let [one, two, three] = [1, 2, 3];

console.log(one); // output 1

// 4. the order does matter

const [six, four, five] = ["empat", "lima", "enam"];

console.log(four);

// 5. we can use commas (,,) to skip values

const [, , thirty] = [10, 20, 30];
console.log(thirty);

// 6. Another trick to named variable from document (only works in html!)
/*
document; // this variable contains a lot of references

// use destructuring to get a specific one:

let { title } = document;

console.log(title); */

// 7. using spread and destructuring

let [ones, ...others] = [1, 2, 3, 4];

console.log(ones);
console.log(others);
