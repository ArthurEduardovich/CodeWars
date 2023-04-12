function well (x) {
    const sum = x.filter( (el) => {
        if (el == 'good') return true;
    })

    return sum.length <= 2 && sum.length > 0 ? 'Publish!':
            sum.length > 2 ? 'I smell a series!':
                'Fail!'
}

console.log(well(["bad","bad","good","bad","good","bad"]))