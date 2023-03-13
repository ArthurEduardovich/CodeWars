// quest 1
const changeNumber = (n) => {
    if (n > 0) {
        return n+= 8;
    } else {
        return n;
    }
}

// quest2
const numberSign = (n) => {
    if (n > 0) {
        return 'plus';
    } else if (n === 0) {
        return null;
    } else {
        return 'minus';
    }
}

//quest 3
const numberDescription = (num) => {
    if (num > 0) {
        return 'positive';
    } else if (num === 0) {
        return 'zero';
    } else {
        return 'negative';
    }
}

// quest 4
const evenOrOdd = (n) => {
    if (n % 2 === 0 || n === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// quest 5
const isPalindrome = (n) => {
    const nToStr = String(n);
    const nToStrOneSymbol = nToStr[0];
    if (n % 10 === Number(nToStrOneSymbol)) {
        return 'palindrome';
    } else {
        return 'not a palindrome';
    }
}
console.log(isPalindrome(212));