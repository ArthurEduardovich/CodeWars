// 1
function distanceToMoon(distance){
    const calcDistToKm = () => Math.round(distance / 100000);
    const calcDistToMeters = () => Math.round(distance / 100);
    return [calcDistToKm(), calcDistToMeters()]
  }
console.log(distanceToMoon(38020012375));

// 2
function roundElementsOfArray(arr){
  return arr.map((el) => Math.round(el));
}
console.log(roundElementsOfArray([10.23, 34.89, 0.1, 4.45, 8.5]))

// 3
function danspower(num, power) {
  let a = Math.pow(num, power);
  if (a % 2 !== 0) {
    return Math.round(a / 10) * 10;
  } else {
    return a;
  }
}
console.log(danspower(6, 9))
