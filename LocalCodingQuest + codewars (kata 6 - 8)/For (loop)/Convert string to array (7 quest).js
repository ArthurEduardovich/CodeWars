// 1 Convert string to array
function replaceSpaces (str) {
    const acc = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') acc.unshift(str[i]);
      else {
        acc.push(null)
      }
    }
    return acc;
}
// console.log(replaceSpaces('hello world'));

// 2 Connecting rows by index
function twoStrings (str1, str2) {
    const acc = [];
    for (let i = 0; i < str1.length; i++) {
        acc.push(str1[i] + str2[i])
    }
    return acc;
}
// console.log(twoString('abc','def'));

// 3 Changing the case of letters in a string
function reverseLettersCase (str) {
    const acc = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' ') continue;
        if (str[i] === str[i].toLowerCase()) acc.push(str[i].toUpperCase());
        if (str[i] === str[i].toUpperCase()) acc.push(str[i].toLowerCase());
    }
    return acc
}

// 4 Figures equal to their indices
function strOfNum (str) {
    const acc = [];
    for (let i = 0; i < str.length; i++){
        if (Number(str[i]) == i) acc.push(str[i]);
        else continue;
    }
    return acc;
}
// console.log(strOfNum('052446'));

// 5 The division into vowels and consonants
function vowelsAndConsonants (str) {
    const vowels = 'aeiou';
    const vowelsArr = [];
    const consonantsArr = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) vowelsArr.push(str[i])
        else consonantsArr.push(str[i])
    }
    return [vowelsArr, consonantsArr];
}
// console.log(vowelsAndConsonants('javascript'));

// 6 Add an inverted string to the array
function reverseString (str, breakPoint) {
    const acc = [];
    for (let i = str.length - 1; i >= 0; i--){
        if (str[i] === breakPoint) break;
        else acc.push(str[i]);
    }
    return acc;
}

// 7 