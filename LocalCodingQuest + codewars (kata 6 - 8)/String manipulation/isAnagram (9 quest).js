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

// 5
function isAnagram5 (arr){
    const checkLength = () => {
        const firstLength = arr[0].length;
        for (let i = 1; i < arr.length; i++){
            if (firstLength !== arr[i].length) return false;
        }
        return true;
    }
    
}
console.log(isAnagram5(['elbow','below','ebowl'])); // true