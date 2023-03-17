const yearDays = (year) => {
    if (Math.abs(year) % 100 === 0 && Math.abs(year) % 4 === 0) {
        return `${year} has is 365`;
    }
    if (Math.abs(year) % 100 !== 0 && Math.abs(year) % 4 === 0) {
        return `${year} has is 366`;
    }
    return `${year} has is 365`;
}

console.log(yearDays(1500));



