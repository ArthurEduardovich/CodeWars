// 1
function checkTheString (str){
    for (let i = 0; i < str.length / 2; i++){
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

// 2
function isPalindrome (str) {
    for (let i = 0; i < str.length / 2; i++){
      if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) return false;
    }
    return true;
  }

  // 3
  function isAnyPalindrome(str1, str2){
    function checkInPalindrome (s){
      for (let i = 0; i < s.length / 2; i++){
        if (s[i] !== s[s.length - 1 - i]) return false;
      }
      return true;
    }
    if (checkInPalindrome(str1) && checkInPalindrome(str2)) return "both are palindrome";
    if (checkInPalindrome(str1) === true && checkInPalindrome(str2) === false) return `${str1} is palindrome`;
    if (checkInPalindrome(str1) === false && checkInPalindrome(str2) === true) return `${str2} is palindrome`;
    return "none of them is palindrome";
}

// 4
function checkArray(arr){
    for (let i = 0; i < arr[0].length / 2; i++){
      if (arr[0][i] !== arr[0][arr[0].length - 1 - i]) return false;
    }
    return true;
}
// console.log(checkArray(["madam"]))
// console.log(checkArray(["hello"]))

// 5
function makePalindrome(str){
    let strToPalindrome = str;
    for (let i = 0; i < str.length; i++){
      strToPalindrome+= str[str.length - 1 - i];
    }
    return strToPalindrome;
}
// console.log(makePalindrome('cat'));

// 6
function isArrayPalindrome(arr){
    let str = ''
    for (let i = 0; i < arr.length; i++){
      str+= arr[i];
    }
    for (let i = 0; i < str.length / 2; i++){
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
  }

  // 7
  function checkStr(str){
    for (let i = 0; i < str.length / 2; i++){
      if (str[i] !== str[str.length - 1 - i]) return `${str} is not palindrome`
    }
    return `${str} is palindrome`
  }

