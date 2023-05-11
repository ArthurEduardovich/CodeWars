// 1
function reverseStrAndCase(s){
    let result = '';
    for (let i = 0; i < s.length; i++){
      if (s[i] === s[i].toLowerCase()) result = s[i].toUpperCase() + result;
      else result = s[i].toLowerCase() + result;
    }
    return result;
}
// console.log(reverseStrAndCase('Hi There'));

