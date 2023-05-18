// 1
function isAnagram(str1, str2){
    if (!str1 || !str2) return "One or both strings are empty";
    const s1 = str1.trim().toLowerCase().split('').sort().join('');
    const s2 = str2.trim().toLowerCase().split('').sort().join('');
    return s1 === s2;
}

// 2
function isAnagram2(str1, str2){
    if (str1.length != str2.length) return false;

    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();

    for (let i = 0; i < s1.length; i++){
        for (let j = 0; j < s2.length; j++){
            if (s1[i] === s2[j]) break;
            if (s2.length - 1 === j) return false;
        }
    }
    return true;
}
// console.log(isAnagram2('32145', '54326')); // false

// 3
function isAnagram3(str1, str2){
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();
    if (s1.length !== s2.length) return false;
    const obj = {};
    for (const el1 of s1){
        obj[el1] = true;
    }
    for (const el2 of s2){
        if (!obj[el2] !== el2) return false;
    }
    return true;
}
// console.log(isAnagram3('123', '923'));

// 4
function isAnagram4(str1, str2){
    function delSpaced(s){
        let result = '';
        for (const el of s){
            if (el !== ' ') result+= el.toLowerCase();
        }
        return result;
    }
    const s1 = delSpaced(str1);
    const s2 = delSpaced(str2);
    if (s1.length !== s2.length) return false;
    for (let i = 0; i < s1.length; i++){
        for (let j = 0; j < s2.length; j++){
            if (s1[i] === s2[j]) break;
            if (s1.length - 1 === j) return false;
        }
    }
    return true;
}

// 5 functuin isAnagram5 (no split, join, sort)
function isAnagram5 (arr){
    const obj = {};
    for (const el of arr){
        const s = el.toLowerCase();
        let sum = 0;
        for (let i = 0; i < s.length; i++){
            sum += s.charCodeAt(i);
        }
        obj[sum] = true;
    }
    return Object.keys(obj).length;  
}
// console.log(isAnagram5(['elbow','below','ebowl'])); // true
// console.log(isAnagram5(['cat', 'dog','big'])); // false

// 6
function isAnagram6(arr1,arr2){
    const s1 = arr1.filter((el) => el !== '' && el !== ' ').sort().join('');
    const s2 = arr2.filter((el) => el !== '' && el !== ' ').sort().join('');
    return s1 === s2;
  }
// console.log(isAnagram6(['l', 'a', 'p', 't', 'o', 'p'], ['t', 'o', 'o', 'p', 'l', 'a', 'p']));
// console.log(isAnagram6(['e', 'l', 'b', 'o', 'w'], ['b', 'e', 'l', 'o', 'w']));
// console.log(isAnagram6(['1', '2', '3'], [' ', '', '3', '1', ' ', '2']));

// 7
function isAnagram7(str1, str2){
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();
    if (s1.length !== s2.length) return false;
    const object2 = {};
    for (let i = 0; i < s2.length; i++){
      const el = s2[i];
      object2[el] = true;
    }
    for (let j = 0; j < s1.length; j++){
        const el = s1[j];
        if (!object2[el]) return false;
    }
    return [true, object2]
}
// console.log(isAnagram7('123','321'));
// console.log(isAnagram7('S T A T E', 'taste'));
// console.log(isAnagram7('conversation', 'voices rant on'));

// 8
// example isAnagram8({str1: 'a b c', str2: ' BAC '}) should return {str1: 'a b c', str2: ' BAC ', result: true}


    function isAnagram8(obj){
        const s1 = obj.str1.split('').filter(el => el !== '' && el !== ' ').map(el => el.toLowerCase()).sort().join('');
        const s2 = obj.str2.split('').filter(el => el !== '' && el !== ' ').map(el => el.toLowerCase()).sort().join('');
        const result = s1 === s2;
        obj['result'] = result;
        return obj
    }
console.log(isAnagram8({str1: 'a b c', str2: ' BAC '})); //  {str1: 'a b c', str2: ' BAC ', result: true}
console.log(isAnagram8({str1: 'a b c a', str2: ' BAC '}));
