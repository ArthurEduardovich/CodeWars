function dblLinear(n) {
    let res = [1];
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++){
        let a = 2 * res[x] + 1;
        let b = 3 * res[y] + 1;
        if (a <= b) {
            res.push(a);
            x++;
            if (a === b) y++;
        } else {
            res.push(b);
            y++;
        }
    }
    return res[n];
}
console.log(dblLinear(20));//57 