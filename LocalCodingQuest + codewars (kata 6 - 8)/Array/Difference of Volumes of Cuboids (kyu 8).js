const findDifference = (a, b) => {
    const AreaA = () => a[0] * a[1] * a[2];
    const AreaB = () => b[0] * b[1] * b[2];

    return AreaA() - AreaB()? Math.abs(AreaA() - AreaB()): 
    AreaB() - AreaA()? Math.abs(AreaB() - AreaA()):
    0;  
}
console.log(findDifference([16,10,11],[13,20,12]))