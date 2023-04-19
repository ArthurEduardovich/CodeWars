function completeSeries(arr) {

    const arrDublicate = arr.filter((el,i) => {
        if (i == arr.indexOf(el) && i != arr.lastIndexOf(el)) return true;
    });
    if (arrDublicate.length !== 0) return [0];
    
    const resultArr = [];
    for (let i = 0; i <= Math.max(...arr); i++){
        resultArr.push(i);
    }
    return resultArr;
}


console.log(completeSeries([1,4,5,5]))