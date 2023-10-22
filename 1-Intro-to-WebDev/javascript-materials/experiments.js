const character = "0";
const timesToRepeat = 10;
let word = "";

for (let i = 0; i < timesToRepeat; i++) {
  word = word + character;
}
console.log("total repeated: ", timesToRepeat);
console.log(word);

// using function built in
console.log("".padStart(timesToRepeat, character));

let f;

console.log(isNaN(f));
