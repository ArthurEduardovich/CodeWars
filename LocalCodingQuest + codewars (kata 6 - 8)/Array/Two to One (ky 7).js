function longest(s1, s2) {
    return s1.concat(s2).split('').filter((el, i, arr) => i === arr.indexOf(el)).sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere", "aehrsty"));