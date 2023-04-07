const number = function (busStop) {
    let totalOut = 0;
    let totalExit = 0;
    for (let i = 0; i < busStop.length; i++) {
        for (let j = 0; j < 1; j++) {
            totalOut+= busStop[i][0]
            totalExit+= busStop[i][1]
        }
    }
    return totalOut - totalExit;
}
console.log(number([[10,0],[3,5],[5,8]]));