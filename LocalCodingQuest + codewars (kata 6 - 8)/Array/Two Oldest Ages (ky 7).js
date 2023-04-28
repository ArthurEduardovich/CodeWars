function twoOldestAges(ages){
    const result = ages.sort((x, y) => y - x);
    return [result[1], result[0]];
}

console.log(twoOldestAges([1, 2, 10, 8]))