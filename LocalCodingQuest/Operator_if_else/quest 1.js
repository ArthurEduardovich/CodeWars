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

// quest 6
const equationHasRoots  = (a, b, c) => {
        const d = Math.pow(b, 2) - 4 * a * c;
        if (d < 0) {
            return 'The equation has no roots';
        } else {
            return 'The equation has roots';
        }
}
console.log(equationHasRoots(3, 2, 1));

//quest 7
const changeNumber = (n) => {
    if (n > 0) {
        return n * 2;
    }
    return n / 2;
}












