// 1
function isPalindrome(str){
    let strDelSpace = ''
    for (let i = 0; i < str.length; i++){
      if (str[i] === ' ') continue;
      else strDelSpace+= str[i];
    }
    for (let i = 0; i < Math.floor(strDelSpace.length / 2); i++){
      if (strDelSpace[i] !== strDelSpace[strDelSpace.length - 1 - i]) return false;
    }
    return true;
  }
//   console.log(isPalindrome('every moment is life'));
//   console.log(isPalindrome('pull up if i pull up'));

// 2
function countPalindrome(arr){
    function isPalindrome(s){
        for (let i = 0; i < s.length / 2; i++){
            if (s[i] !== s[s.length - 1 - i]) return false;
        }
        return true;
    }
    let count = 0;
    for (const el of arr){
        if (isPalindrome(el)) count++;
    }
    return count;
}