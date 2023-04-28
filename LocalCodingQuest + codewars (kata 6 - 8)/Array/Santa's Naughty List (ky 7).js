function findChildren(santasList, children) {
    return santasList.concat(children)
    .filter((el, i, arr) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el))
    .sort();
}

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])) // ["Jason", "Jordan"]
console.log(findChildren(["jASon", "JAsoN", "JaSON", "ja sON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"])) // ["JAsoN", "jASon"]
console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"])) // ["James", "Jason"]