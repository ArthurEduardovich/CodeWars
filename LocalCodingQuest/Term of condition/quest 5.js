// Check the truth of the statement "Both numbers a and b are even".
const areNumbersEven = (a, b) => {
    return (a % 2 === 0 && b % 2 === 0);
}
console.log(areNumbersEven(-3, 8));