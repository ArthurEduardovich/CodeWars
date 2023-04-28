
function findChildren(santasList, children) {
    let res = [];
    for (let item of santasList){
        for (let item2 of children){
            if (item === item2 && !res.includes(item)){
                res.push(item);
            }
        }
    }
    return res.sort();
}

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])) // ["Jason", "Jordan"]
console.log(findChildren(["jASon", "JAsoN", "JaSON", "ja sON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"])) // ["JAsoN", "jASon"]
console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"])) // ["James", "Jason"]