
let hero = "super_JS";
let exp = 9238;
function classhero(name, xp) {
  let level = "";
  if (xp < 1000) {
    level = "Iron";
  } else if (xp <= 2000) {
    level = "Bronze";
  } else if (xp <= 5000) {
    level = "Silver";
  } else if (xp <= 7000) {
    level = "Gold";
  } else if (xp <= 8000) {
    level = "Platinum";
  } else if (xp <= 9000) {
    level = "Ascendant";
  } else if (xp <= 10000) {
    level = "Immortal";
  } else {
    level = "Radiant";
  }
  console.log(`${name} has ${xp} experience and was classified as: ${level}`);
}
classhero(hero, exp);
