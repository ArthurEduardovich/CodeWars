function toFreud(string) {
    if (string == '') return '';
    const result = string.split(' ').map((el) => el = 'sex').join(' ')
    return result;
}
console.log(toFreud("This is a test"));
