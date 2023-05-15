// example: sumOfDivided([12, 15]) => [[2, 12], [3, 27], [5, 15]]
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) return false;
    }
    return true;
}

function sumOfDivided(lst) {
    let res = [];
    let prime = [];
    let sum = 0;
    for (let i = 0; i < lst.length; i++){
        for (let j = 2; j <= Math.abs(lst[i]); j++){
            if (isPrime(j) && lst[i] % j === 0) {
                prime.push(j);
            }
        }
    }
    prime = [...new Set(prime)].sort((a, b) => a - b);
    for (let i = 0; i < prime.length; i++){
        for (let j = 0; j < lst.length; j++){
            if (lst[j] % prime[i] === 0) sum += lst[j];
        }
        res.push([prime[i], sum]);
        sum = 0;
    }
    return res;
}