const humanYearsCatYearsDogYears = (n) => {
    if (n === 1) {
        return [n, 15, 15];
    } else if (n === 2) {
        return [n, 15 + 9, 15 + 9];
    } else {
        return [n, 15 + 9 + ((n - 2) * 4), 15 + 9 + ((n - 2) * 5)]
    }
}
console.log(humanYearsCatYearsDogYears(10))