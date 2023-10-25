const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];
const spiceGirls = {
  albums: ["Spice", "Spiceworld", "Forever"],
  motto: "Girl Power",
  members: spices, // !! referencing the above array
};

// From the spiceGirls object, how can we retrieve:

//     "Girl Power"
//     The object representing Ginger Spice
//     "Spiceworld"
//     "Victoria"

console.log(spiceGirls.motto);
console.log(spices[1]); // or
console.log(spiceGirls.members[1]); // much more intricate
console.log(spiceGirls.albums[1]);
console.log(spices[4].name); // or
console.log(spiceGirls.members[4].name); // much more intricate
