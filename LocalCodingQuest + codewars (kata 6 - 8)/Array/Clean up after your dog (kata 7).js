function crap(x, bags, cap) {
    let count = 0;
    let totalCap = bags * cap;
    for (const subEl of x){
        for (const el of subEl){
            if (el === '@') count++;
            if (el === 'D') return 'Dog!!'
        }
    }
    return count > totalCap? "Cr@p": 'Clean'
}
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','D', '_']], 2, 2));