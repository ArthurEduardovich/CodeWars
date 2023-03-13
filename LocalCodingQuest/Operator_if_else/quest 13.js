// lucky number (KY 7) KATA
const isLucky = (n) => {
    const nToString = String(n);
    let sum = 0;
    for (let i = 0; i < nToString.length; i++) {
        sum+= Number(nToString[i]);
    }
    if (sum === 0 || sum % 9 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLucky(22869));