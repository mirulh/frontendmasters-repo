const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "victoria", nickname: "Posh" },
];

// - create a new array names with only the name of each girl
const onlyName = spices.map((spice) => spice.name);
console.log(onlyName);

console.log("separator--------------------------------");

// - create a new array endInyY with with just the girls whose nickname ends with 'y'
const endInY = spices.filter((spice) => {
  return spice.nickname.endsWith("y"); // no need to use include
});

console.log(endInY);

console.log("separator--------------------------------");

// alternative solution that is slightly more complicated
const complicatedY = spices.filter(function (spice) {
  return spice.nickname[spice.nickname.length - 1] == "y";
});

console.log(complicatedY);

// using arrow fn
const complicatedYArrow = spices.filter(
  (spice) => spice.nickname[spice.nickname.length - 1] === "y"
);

console.log(complicatedYArrow);
