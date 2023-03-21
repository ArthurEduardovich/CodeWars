function grabDoll (dolls) {
  let bag = [];
  for (let i = 0; i < dolls.length; i++){
    if (bag.length > 2) break;
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
    bag.push(dolls[i]);
  }
  return bag;
}
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]))