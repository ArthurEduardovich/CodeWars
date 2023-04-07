const inviteMoreWomen = function (arr) {
    let countWoman = 0;
    let countMan = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) countWoman++;
        else countMan++;
    }
    return countWoman < countMan;
}