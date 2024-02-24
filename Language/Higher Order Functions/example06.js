/*
// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
*/
const str ="ABC";
for (let i = 0; i < str.length; i++) {
  const codePoint = str.codePointAt(i);
  const charPoint = str.charCodeAt(i);
  console.log(codePoint+ " " +charPoint);
  // Additional logic to handle incrementing 'i' based on the character being a surrogate pair
}

let roseDragon = "🌹🐉ABC";
for (let char of roseDragon) {
  console.log(char);
}
