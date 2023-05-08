const arr1 = ['One', 'Two', 'Three'];
const newArr = []
arr1.forEach((el, i) => {
    newArr.push(`${el}:${i}`)
})
console.log(newArr);