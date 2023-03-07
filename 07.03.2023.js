/* The goal is to create a function of two inputs number and power, 
that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000 */

  const numberToPower = (number, power) => {
    let result = 1;
    if (number === 0 && power === 0) {
        result = 0;
    } else if (number > 0 && power === 0) {
        result = 1;
    } else if (number === 0 && power > 0){
        result = 0;
    }
    for (let i = 1; i <= power; i++) {
        result *= number
    }
    return result;
}
console.log(numberToPower(10, 6))