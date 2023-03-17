const bugsFixing = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    } else if (typeof value === 'string') {
        return `${value}!`
    } else {
        return 'Wrong value'
    }
}

