function findNeedle (haystack) {
    let indexNeedle = haystack.indexOf('needle');
    return `found the needle at position ${indexNeedle}`
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))