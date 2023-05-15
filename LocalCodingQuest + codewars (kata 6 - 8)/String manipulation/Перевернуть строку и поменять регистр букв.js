// 1
function testit(s){
    let stoArr = s.split(' ');
    let result = [];
    for (const el of stoArr){
        if (!el) return ''
        result.push(el.slice(0, -1).toLowerCase() + el[el.length - 1].toUpperCase());
    }
    return result.join(' ');
}
console.log(testit(''));

