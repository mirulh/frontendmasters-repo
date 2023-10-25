const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "victoria", nickname: "Posh" },
];

// using arrow function

const nicknames = spices.map((spice) => spice.nickname + " Spice");
console.log(nicknames);

// using regular function

const names = spices.map(function getOnlyName(spice) {
  return spice.name + " Spice";
});

console.log(names);

// using them with backticks

const nicknamesSimplified = spices.map((spice) => `${spice.nickname} Spicy`);
console.log(nicknamesSimplified);
