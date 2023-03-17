const unitsOfLength = (n, unit) => {
    switch (unit) {
        case 'm':
            return n * 1;
            break;
        case 'km':
            return n * 1000;
            break;
        case 'dm':
            return n / 10;
            break;
        case 'cm':
            return n / 100;
            break;
        case 'mm':
            return n / 1000;
            break;
    }
}