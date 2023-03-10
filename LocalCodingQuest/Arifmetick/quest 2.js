const tripleNestedObject = (param) => {
    return  { first: { second: {third: { param: param}}}} 
}

console.log(tripleNestedObject(5))