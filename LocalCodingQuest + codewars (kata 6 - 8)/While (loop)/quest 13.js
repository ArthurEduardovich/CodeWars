const remainder = (D, d) => {
    let i = 0;
    while (i < D) {
        if (i + d > D){
            break;
        }
        i+= d;
    }
    return D - i;
}
console.log(remainder(10, 2));