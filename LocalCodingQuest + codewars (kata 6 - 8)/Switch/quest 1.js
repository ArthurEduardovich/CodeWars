const workdayOrWeekend = (day) => {
    let result = '';
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            result = 'Work day';
            break;
        case 6:
        case 7:
            result = 'Weekend';
            break;
        default:
            result = 'Wrong input';
    }
    return result;
}
console.log(workdayOrWeekend(3))