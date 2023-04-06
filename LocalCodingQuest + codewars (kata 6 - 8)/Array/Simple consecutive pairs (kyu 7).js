const pairs = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i+= 2){
        let r = [arr[i], arr[i + 1]]
        if (r[0] + 1 === r[1] || r[0] - 1 === r[1]){
            count++;
        } else {
            continue;
        }
    }
    return count;
}
console.log(pairs([1,2,5,8,-4,-3,7,6,5])) // 3
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])) // 4
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])) // 2
console.log(pairs([0, -1, -1, 0, 1, 0])) // 3