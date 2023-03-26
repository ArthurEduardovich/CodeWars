function race(v1, v2, g) {
  let a = v2 - v1;
  let b = g / a;
  let c = b * 3600;
  let hours = Math.floor(c / 3600);
  let minutes = Math.floor(((c - (3600 * hours)) / 60));
  let seconds = Math.floor(c - ((hours * 3600) + minutes * 60));
  if (hours < 0 || minutes < 0 || seconds < 0 ) {
    return null;
  }
  return [hours, minutes, seconds];
}
console.log(race(720, 850, 70))
console.log(race(80, 91, 37))