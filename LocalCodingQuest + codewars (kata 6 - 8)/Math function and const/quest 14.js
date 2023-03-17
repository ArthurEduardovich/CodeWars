//Соревнования по плаванию
function swimmingRecord(time1, time2, time3, time4){
    return Math.min(time1, time2, time3, time4);
}
console.log(swimmingRecord(7, 5, 3, 6));