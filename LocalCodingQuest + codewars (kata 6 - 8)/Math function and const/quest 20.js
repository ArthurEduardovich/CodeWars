// Стоимость бензина
const fuelPrice = (litres, pricePerLitre) => {
    const calcSumOfFuel = () => litres * pricePerLitre;
    return Number(calcSumOfFuel().toFixed(2));
}
console.log(fuelPrice(5.25, 2.39));