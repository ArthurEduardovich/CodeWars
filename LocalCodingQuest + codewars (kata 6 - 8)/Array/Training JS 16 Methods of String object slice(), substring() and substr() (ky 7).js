function cutIt2(arr){
    const minLength = Math.min(...arr.map(el => el.length))
    return arr.map((el) => el.substr(0, minLength))
}
console.log(cutIt(["codewars","javascript","java"])); // ["codewars","javascript","java"]