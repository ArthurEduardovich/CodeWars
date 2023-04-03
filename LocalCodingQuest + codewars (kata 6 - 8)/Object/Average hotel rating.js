// 1
function getAverageRating(hotel){
    let stingHotel = JSON.stringify(hotel);
    let result = 0;
    for(let i = 0; i < stingHotel.length; i++){
        if (+stingHotel[i] >= 0) result+= +stingHotel[i];
        continue;
    }
    return Number(result) / 4;
}

// 2
function warehouseCapacity(capacity, productExist, productIncoming){
    const object = {
        warehouseAvailability: Math.round(capacity - productExist),
        productIncoming: Math.round(productIncoming),
        warehouseCapacity: 100 - (Math.round(((productExist + productIncoming) / capacity) * 100))
    }
    return object;
}

// 3

function evenOddSum(n1,n2,n3,n4,n5){
    const arr = [n1, n2, n3, n4, n5];
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) even+= arr[i];
        if (arr[i] % 2 !== 0) odd+= arr[i];
    }
    const object = {
        even: even,
        odd: odd
    }
    return object;
}

// 4
function onlineOrder(product1, product2, product3, moneyAmount){

    const totalPriceProduct1 = (product1['price'] * product1['quantity']);
    const totalPriceProduct2 = (product2['price'] * product2['quantity']);
    const totalPriceProduct3 = (product3['price'] * product3['quantity']);
    const totalCostPrice = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;

    if (moneyAmount >= totalCostPrice){
        return 'You can buy all products';
    };

    if (moneyAmount >= (totalCostPrice - totalPriceProduct3)){
        return `You have enough money to buy ${product1['name']} and ${product2['name']}`
    }
    if (moneyAmount >= (totalCostPrice - (totalPriceProduct3 + totalPriceProduct2))){
        return `You have enough money to buy ${product1['name']}`
    }
    return "You don't have enough money";
}

// 5

function orderDelivery (delivery, isDelivery, meridiem){
    if (isDelivery) {
        return `Your order was delivered to ${delivery['address']} on ${delivery['date']} at ${delivery['time']} ${meridiem}`
    } else {
        return `Your order was picked up by courier at ${delivery['time']} ${meridiem} on ${delivery['date']}`
    }
}

// 6
function hasProperty(obj, key){
    return key in obj;
}
console.log(hasProperty({ name: "Helen", lastName: "Rock" }, "lastName"));

// 7
function clientInfo(obj, key, value){
    if (key in obj) {
        obj[key] = value;
    } else {
        obj[key] = value;
    }
    return obj;
}

// 8
function numberSpec(obj, key1, key2, operator){
    if (key1 in obj && key2 in obj){
        let result =
            operator === '+' ? `${obj[key1]} + ${obj[key2]} = ${obj[key1] + obj[key2]}`:
            operator === '-' ? `${obj[key1]} - ${obj[key2]} = ${obj[key1] - obj[key2]}`:
            operator === '*' ? `${obj[key1]} * ${obj[key2]} = ${obj[key1] * obj[key2]}`:
            operator === '/' ? `${obj[key1]} / ${obj[key2]} = ${obj[key1] / obj[key2]}`:
            'There is no such properties in object';
        return result;
    }
    return 'There is no such properties in object';
}

// 9
function addressBook(name, lastName, phone, email){
    const totalName = name.trim().toUpperCase();
    const totalLastName = lastName.trim().toUpperCase();
    const totalEmail = email.trim().toLowerCase();
    const totalPhone = 
        phone.trim()[0] === '+' ? phone.trim(): `+${phone.trim()}`;

        return {
            name: totalName,
            lastName: totalLastName,
            phone: totalPhone,
            email: totalEmail
        }
}

// 10
function forecast(obj){
    let result = 
    (obj['temperature'] === 20 && obj['humidity'] === 55)? 'Low risk':
    (obj['temperature'] === 20 && obj['humidity'] === 70)? 'Low risk':
    (obj['temperature'] === 25 && obj['humidity'] === 55)? 'Medium risk':
    (obj['temperature'] === 30 && obj['humidity'] === 60)? 'Watch the situation':
    (obj['temperature'] === 30 && obj['humidity'] === 30)? 'High risk':
    (obj['temperature'] === 22 && obj['humidity'] === 51)? 'Medium risk':
    'Watch the situation';
    return result;    
}







