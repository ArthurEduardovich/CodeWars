// Holiday VI - Shark Pontoon (kata)
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let result = '';

    const calcTimeShark = () => {
        if (dolphin === true) {
            return sharkDistance / (sharkSpeed / 2);
        } else {
            return sharkDistance / sharkSpeed;
        }
    }
    const calcTimeYou = () => pontoonDistance / youSpeed;

    if (calcTimeShark() <= calcTimeYou()) {
        result = 'Shark Bait!'
    } else {
        result = 'Alive!'
    }
    return result;
}
console.log(shark(24, 0, 4, 8, true));
