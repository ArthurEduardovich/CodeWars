function arrayLeaders(number){
    const result = []
    for (let i = 0; i < number.length; i++){
        let sum = 0;
        for (let j = i + 1; j < number.length; j++){
            sum+= number[j]
        }
        if (number[i] > sum){
            result.push(number[i])
        }
    }
    return result;
}
console.log(arrayLeaders([16,17,4,3,5,2])); // [17, 5, 2]
console.log(arrayLeaders([-1,-29,-26,-2])) // [-1]
console.log(arrayLeaders([0,-1,-29,3,2])); // [0, -1, 3, 2]
