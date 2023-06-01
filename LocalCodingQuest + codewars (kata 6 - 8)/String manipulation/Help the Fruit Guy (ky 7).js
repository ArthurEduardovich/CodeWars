function removeRotten(fruit) {
  return fruit ? fruit.map((el) => el.replace('rotten', '').toLowerCase()) : [];
}
console.log(removeRotten(['apple', 'banana', 'kiwi', 'melone', ' orange']));
