function digitToWords (num) {
    switch (num) {
        case 0:
            return ['zero', 'zeroth'];
        case 1:
            return ['one', 'first'];
        case 2:
            return ['two', 'second'];
        case 3:
            return ['three', 'third'];
        case 4:
            return ['four', 'fourth'];
        case 5:
            return ['five', 'fifth'];
        case 6:
            return ['six', 'sixth'];
        case 7:
            return ['seven', 'seventh'];
        case 8:
            return ['eight', 'eighth'];
        case 9:
            return ['nine', 'ninth'];
        case 10:
            return ['ten', 'tenth'];
        case 11:
            return ['eleven', 'eleventh'];
        case 12:
            return ['twelve', 'twelfth']
        default:
            return undefined;
    }
}