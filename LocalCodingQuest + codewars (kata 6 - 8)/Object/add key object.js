// 1
function calculateSumObject(object){
  object['sum'] = object['n1'] + object['n2'];
  return object;
};
console.log(calculateSumObject({n1: 10, n2: 10}));

// 2
function changeAnimalColor(animalObj, color){
  animalObj['color'] = color;
  return `${animalObj['name']}'s new color is ${animalObj.color}`
};
console.log(changeAnimalColor({animal: 'dog', name: 'Bulba', color: 'black'},'white'));

// 3
function person(obj, newAge, newCity){
  obj['age'] = newAge;
  obj['city'] = newCity;
  return obj;
};

// 4
function changePrice(car, year, n){
  if(car['year'] > year){
    return 'Current year is less than car year';
  }
  /*******************************************/
  const calcPriceAuto = () => {
    return (car['price'] - ((year - car['year']) * n));
  };
  /******************************************/
  return `${car['make'].toUpperCase()}-${car['model'].toUpperCase()}-${car['year']}-${car['color'].toUpperCase()}$${calcPriceAuto()}`;
};

// 5
function fixAddress(address){
  address['state'] = address['state'].toUpperCase();
  address['zip'] = address['zip'].trim();
  return address;
};

// 6
function calculateTotalPriceWithDiscount(product1, product2, discount) {
  const sumProduct1 = product1['price'] * product1['quantity'];
  const sumProduct2 = product2['price'] * product2['quantity'];
  const calcDiscount = () => discount;
  let result =
    (calcDiscount() >= (sumProduct1 + sumProduct2))? 'Total price with discount is 0 dollars':
      `Total price with discount is ${(sumProduct1 + sumProduct2) - calcDiscount()} dollars`;
  return result;
};
console.log(calculateTotalPriceWithDiscount({ price: 3, quantity: 12 },{ price: 8, quantity: 5 }, 8)); // 68

// 7
function currentWeather(weather){
  if (weather['temperature'] >= 20){
    weather.condition = 'warm';
  } else if (weather['temperature'] >= 10 && weather['temperature'] < 20){
    weather.condition = 'cool';
  } else {
    weather.condition = 'cold';
  };
  return weather;
}
console.log(currentWeather({ temperature: 10, condition: ''}));

// 8
function authorBook(author, book){
  author['bookPages'] = book['chapter1'] + book['chapter2'] + book['chapter3'];
  return author;
};

// 9
function calculateTotalPrice2(product1, product2, n){
  const exodusSumProduct1 = product1['price'] * product1['quantity'];
  const exodusSumProduct2 = product2['price'] * product2['quantity'];
  const totalSumForTax = Math.round((exodusSumProduct1 + exodusSumProduct2) + (((exodusSumProduct1 + exodusSumProduct2) / 100) * n))
  return `Total price is ${totalSumForTax} dollars`
};
console.log(calculateTotalPrice2({ price: 99.99, quantity: 2 }, { price: 2.78, quantity: 12 }, 6.25))

// 10
function calculateTiles(room, tile, k){
  const calcAreaRoom = () => room['width'] * room['height'];
  const calcAreaTile = () => tile['width'] * tile['height'];
  const totalValueTile = () => Math.ceil((calcAreaRoom() / calcAreaTile()) * (1 + k / 100));
  tile['quantity'] = totalValueTile();
  return tile;
};








