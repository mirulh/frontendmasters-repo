let planet = "Jupiter";

function scopeOut() {
  let planet = "Mars";
  console.log("Inner planet: ", planet);
}

scopeOut();
console.log("Outer planet:", planet);
