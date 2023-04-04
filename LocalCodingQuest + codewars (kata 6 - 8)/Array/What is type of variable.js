// 1
function type(value) {
    const type = {}.toString.call(value);
    return type.slice(8, type.length - 1).toLowerCase();
  }
console.log(type([]))

// 2
const arrCheck = (value) => {
    let count = 0;
    for (let i = 0; i < value.length; i++){
        if (Array.isArray(value[i]) === true) count++;
        count;
    }
    return count === value.length? true: false; 
}
console.log(arrCheck([]));