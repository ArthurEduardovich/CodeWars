const isThereAString = (value1, value2) => {
    if (typeof (value1) === 'string' || typeof (value2) === 'string') {
        return 'String received'
    }
    return 'There are no strings'
}

console.log(isThereAString(0, 'a'))