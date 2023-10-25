const firstHalve = ["1", "2"];
const secondHalve = ["3", "4"];

// using spread to merge the arrays

const mergeSpread = [...firstHalve, ...secondHalve];

console.log(mergeSpread); // ['1','2','3','4']

// is equivalent to using concat as it works too

const mergeConcat = firstHalve.concat(secondHalve);

console.log(mergeConcat); // ['1','2','3','4']

console.log(
  "\n--------------OUTPUT with SPREAD(...) and WITHOUT---------------------\n"
);

// spread example with function or method

const skills = ["HTML", "CSS", "JS"];
const newSkills = ["React", "Typescript", "Node"];

skills.push(...newSkills);

console.log("...skills output: ", ...skills);
console.log("...newSkills output: ", ...newSkills);

console.log("skills output: ", skills);
console.log("newSkills output: ", newSkills);

console.log(
  "\n---------------USING PUSH WITHOUT SPREAD RETAINS THE SQUARE BRACKET----------------------\n"
);

firstHalve.push(secondHalve);
console.log(firstHalve);
