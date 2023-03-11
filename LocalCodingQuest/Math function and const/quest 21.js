
const totalPrice = (price, tipPercent, taxPercent) => {
    const calcSumToTipPercent = () => (price / 100) * tipPercent;
    const calcSumToTax = () => (price / 100) * taxPercent;
    const calcExodusSum = () => price + calcSumToTax() + calcSumToTipPercent();
    return Number(calcExodusSum().toFixed(2));
}