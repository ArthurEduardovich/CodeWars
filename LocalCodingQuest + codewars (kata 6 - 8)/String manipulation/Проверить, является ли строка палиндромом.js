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
