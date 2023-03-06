/* 1. Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

const repeatStr = (n, s) => s.repeat(n);
console.log(repeatStr(6, 'I'));

/* 2. To find the volume (centimeters cubed) of a cuboid you use the formula:
volume = Length * Width * Height
But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
It's up to you to find out whether the cuboid has equal sides (= is a cube).
Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
Note: side will be an integer */

const cubeChecker = function(volume, side) {
    if (volume <= 0 || side <= 0) {
        return false
    }
    if (volume === side ** 3) {
    return true
   }
   return false
  };