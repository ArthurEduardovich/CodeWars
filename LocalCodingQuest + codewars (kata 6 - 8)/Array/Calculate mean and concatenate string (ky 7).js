function mean (arr) {
    const resultObj = arr.reduce((acc, el) => {
        if (isNaN(el)) acc.text+= el;
        else {
            acc.medium+= Number(el);
            acc.count+= 1;
        }
        return acc;
    }, {text: '', medium: 0, count: 0})
    return [resultObj.medium / resultObj.count, resultObj.text]
}
console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'])); // [3.6, "udiwstagwo"]