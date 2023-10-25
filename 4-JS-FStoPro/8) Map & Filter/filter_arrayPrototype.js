const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "victoria", nickname: "Posh" },
];

// to filter out an array

// using arrow function
const mels = spices.filter((spice) => spice.name.includes("Mel"));

console.log(mels);

// using regular anonymous function (all nickname contains the letter "r")
const namey = spices.filter(function (spice) {
  return spice.nickname.includes("r");
});

console.log(namey);
