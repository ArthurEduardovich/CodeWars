function timeConvert(num){
    if (num <= 0) return "00:00";
    let result = ''
    const hourse = Math.floor(num / 60);
    const minute = Math.trunc(num % 60);
    if (hourse < 10) {
        result+= `0${hourse}:`;
    } else {
        result+= `${hourse}:`;
    }
    if (minute < 10){
        result+= `0${minute}`;
    } else {
        result+= `${minute}`
    }
    return result;
}
console.log(timeConvert(970));