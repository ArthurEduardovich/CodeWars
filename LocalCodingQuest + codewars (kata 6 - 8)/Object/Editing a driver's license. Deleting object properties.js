// 1
function driverLicense(profile, color){
  delete profile['currentYear'];
  profile.eyeColor = color;
  return profile;
}

// 2
function employeeCard(object){
  delete object['age'];
  let email = `${object['firstName'][0].toLowerCase()}.${object['lastName'].toLowerCase()}@${object['company'].toLowerCase()}.com`;
  object.email = email;
  return object;
}

// 3
function cocktailRecipe(ingredients){

  if (ingredients['name1'] === ingredients['name2']){
    delete ingredients['name1']
  }
  if (ingredients['name2'] === ingredients['name3']){
    delete ingredients['name2']
  }
  if (ingredients['name3'] === ingredients['name4']){
    delete ingredients['name3']
  }
  return ingredients;
}

// 4
function numberSum(count,n1,n2,n3,n4){
  delete count['fractional'];
  const arr = [n1, n2, n3, n4]
  for (let i = 0; i < 4; i++){
    if(arr[i] > 0 && arr[i] % 2 === 0) count['evenPositive']+= arr[i];
    if(arr[i] > 0 && arr[i] % 2 !== 0) count['oddPositive']+= arr[i];
  }
  return count;
}
// console.log(numberSum({oddPositive: 0, evenPositive: 0, fractional: 0}, 1, 2, 3, 4))

// 5
function clientinfo(address,postalCode){
  delete address['flat'];
  address.postalCode = postalCode;
  return address;
}

// 6
function averageTemperature(weather){
const sum = weather['summer'];
weather['summer'] = weather['winter'];
weather['winter'] = sum;
  weather.averageTemperature = (weather['summer'] + weather['winter'] + weather['autumn'] + weather['spring']) / 4;
  return weather;
}
// console.log(averageTemperature({summer: 0, autumn:10, winter: 25, spring:15}))

// 7
function receipt(template, amount, number){
  let calcDiscount =
    (amount >= 1000) ? (amount / 100 * 10): 'Thank you for your purchase!';

  template['purchaseAmount'] = amount;
  template['receiptNumber'] = number;

  if (typeof calcDiscount !== 'number'){
    template['message'] = calcDiscount;
    delete template['discount'];
    template['finalAmount'] = amount;
  } else {
    template['discount'] = calcDiscount;
    template['finalAmount'] = amount - calcDiscount;
  }
  return template;
}

// console.log(receipt({purchaseAmount: 0, receiptNumber: 0}, 2000, 14562))
// console.log(receipt({purchaseAmount: 0, receiptNumber: 0}, 100, 1))
// console.log(receipt({purchaseAmount: 0, receiptNumber: 0}, 1000, 1))
// {purchaseAmount: 1000, receiptNumber: 1, discount: 10, finalAmount: 900})
// {purchaseAmount: 100, receiptNumber: 1, message: Thank you for your purchase!, finalAmount: 100})
// {purchaseAmount: 2000, receiptNumber: 14562, discount: 10, finalAmount: 1800})


// 8
  function tileStash(tile){
    const nonConformance = tile['damaged'] + tile['defect'] + tile['lost'];
    delete tile['damaged'];
    delete tile['defect'];
    delete tile['lost'];
    tile.nonConformance = nonConformance;
    return tile;
  }


















