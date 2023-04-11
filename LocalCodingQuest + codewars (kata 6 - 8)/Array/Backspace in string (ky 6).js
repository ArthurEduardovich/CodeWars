const cleanString = function (str) {
    let arr = [str[0]];
    for (let i = 1; i < str.length; i++){
        if (str[i] != '#'){
            arr.push(str[i])
        } else {
            arr.pop()
        }
    }

    for (let j = 0; j < arr.length; j++){
        if (arr[j] == '#') {
            arr.splice(j, 1);
        }
    }

    return arr.join('')
}
console.log(cleanString('#aabc#d##c'))