function skiponacci(n){
    const fibonacci = [1, 1]
    for (let i = 2; i < n; i++){
        const a = fibonacci[i - 1]
        const b = fibonacci[i - 2]
        fibonacci.push(a + b)
    }
    return fibonacci.map((el, i) => i % 2? el = 'skip': el).join(' ')
}
console.log(skiponacci(7));