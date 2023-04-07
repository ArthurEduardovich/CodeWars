const rowWeights = function (arr) {
    let totalWeigth1 = 0;
    let totalWeigth2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) totalWeigth1+= arr[i]
        else totalWeigth2+= arr[i];
    }
    return [totalWeigth1, totalWeigth2];
}
console.log(rowWeights([0,1,0]))