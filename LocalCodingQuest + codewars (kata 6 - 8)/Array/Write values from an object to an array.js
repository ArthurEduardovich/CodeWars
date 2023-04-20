const objectToArray2 = (obj) => {
    let resultArr2 = Object.values(obj);
    return resultArr2;
}

const objectToArray = (obj) => {
    let resultArr = [];
    resultArr.push(obj.property1)
    resultArr.push(obj.property2)
    resultArr.push(obj.property3)
    resultArr.push(obj.property4)
    return resultArr;
}

console.log(objectToArray(({property1: -342, property2: 'description', property3: 20, property3: true })))