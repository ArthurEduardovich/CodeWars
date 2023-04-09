function multiples(s1,s2,s3) {
    let resultArr = [];
    for (let i = s1; i < s3; i++) {
        if (i % s1 === 0 && i % s2 === 0) resultArr.push(i);
    }
    return resultArr;
}
console.log(multiples(2,4,40))