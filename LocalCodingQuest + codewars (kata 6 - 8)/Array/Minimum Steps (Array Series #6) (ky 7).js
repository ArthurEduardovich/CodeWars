function minimumSteps(numbers, value){
    const arrSort = numbers.sort( (x, y) => x - y);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arrSort.length; i++){
        if (sum >= value) break;
        sum+= arrSort[i];
        count++; 
    } 
    return count - 1;   
}
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464))