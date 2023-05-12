function validParentheses(str){
    let arr = str.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') count++;
        if (arr[i] === ')') count--;
        if (count < 0) return false;
    }
    return count === 0;    
}
console.log(validParentheses(')(')); // false
console.log(validParentheses('(((()))))(')) // false    
console.log(validParentheses('(()))')); // false
console.log(validParentheses('(())()')); // true