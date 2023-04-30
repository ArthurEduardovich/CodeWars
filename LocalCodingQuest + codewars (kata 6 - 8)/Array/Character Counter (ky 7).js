
function validateWord (s) {
    const res = new Set(s.toLowerCase()).size;  
    return res % s === 0? true: false;
}

function validateWord2 (s) {
    const str = s.toLowerCase();

    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        obj[char] = (obj[char] || 0) + 1;
    }
    
    const objArr = Object.values(obj);
    for (let i = 0; i < objArr.length; i++) {
        if (objArr[0] !== objArr[i]) return false;
    }
    return true;
}

console.log(validateWord2('G0qLC$eh:4zB7miOundefinedLNRDzMDog@C$CVFYlE&64p5Di:'));


