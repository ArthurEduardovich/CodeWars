const numberDescription = (n) => {
    if (n < 10) {
        return 'one-digit number';
    }
    if (n < 100 && n > 9) {
        return 'two-digit number';
    }
    if (n < 999 && n > 99) {
        return 'three-digit number';
    }
}