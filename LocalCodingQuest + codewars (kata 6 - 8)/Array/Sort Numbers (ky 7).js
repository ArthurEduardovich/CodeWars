function solution (nums) {
    if (!Array.isArray(nums)) return [];

    return nums.sort((x, y) => x - y);
}

console.log(solution([1,2,3,10,5]))