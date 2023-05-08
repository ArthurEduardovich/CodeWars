function rounders (value) {
    const arr = value.toString().split('').map((el) => Number(el)).reverse()
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] >= 5) {
            arr[i] = 0;
            arr[i + 1] = arr[i + 1] + 1;
        } else if (arr[i] < 5){
            arr[i] = 0;
        }
    }
    return Number(arr.reverse().join(''));
}
console.log(rounders(1445)); // 2000
console.log(rounders(1234)); // 1000
console.log(rounders(71906658)) // 7000000
console.log(rounders(99)); // 100