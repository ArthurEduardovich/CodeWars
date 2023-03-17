const ascendingOrDescendingOrder = (num) => {
    const numToStr = String(num); // изменяем тип числа для перебора
    if (+numToStr[0] < +numToStr[1] && +numToStr[1] < +numToStr[2]) {
        return 'ascending order';
    }
    if (+numToStr[0] > +numToStr[1] && +numToStr[1] > +numToStr[2]) {
        return 'descending order';
    }
    return 'no order';
}
console.log(ascendingOrDescendingOrder(865));