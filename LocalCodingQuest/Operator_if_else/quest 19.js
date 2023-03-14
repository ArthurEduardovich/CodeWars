// Fuel Calculator: Total Cost
function fuelPrice(litres, pricePerLitre) {
  let calcSales = () => {
      if (litres >= 10) {
          return litres * 0.25;
      }
      if (litres >= 8) {
          return litres * 0.2;
      }
      if (litres >= 6) {
          return  litres * 0.15;
      }
      if (litres >= 4) {
          return litres * 0.1;
      }
      if (litres >= 2) {
          return litres * 0.05;
      }
      if (litres < 2) {
          return 0;
      }
  }
  return Number(((litres * pricePerLitre) - calcSales()).toFixed(2));
}
console.log(fuelPrice(5, 1.23))