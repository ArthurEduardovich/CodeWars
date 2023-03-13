// Keep up the hoop (KY 8) Kata
const hoopCount = (n) => {
    if (n < 10) {
        return 'Keep at it until you get it';
    } else {
        return 'Great, now move on to tricks';
    }
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val){
    if (!!(val)) {
        return 'true';
    } else {
        return 'false';
    }
}
console.log(trueOrFalse(null))