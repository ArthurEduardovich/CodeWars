function maxRectangleSquare(arr){
    if (arr.length < 1) return null;
    const result = []
    for (let i = 0; i < arr.length; i++){
        result.push(+arr[i][0] * arr[i][1])
    }
    return Math.max(...result)
}
console.log(maxRectangleSquare([[3, 4],[8, 1],[2, 3]])); // 12