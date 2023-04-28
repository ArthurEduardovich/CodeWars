function addExtra(n){
    const b = [1];
    return n.concat(b);
};


const arr = ['a', 1, 'b', 2];
const arr2 = ['dc', 35];
const res = arr.concat(0, [0], arr2);
console.log(res)