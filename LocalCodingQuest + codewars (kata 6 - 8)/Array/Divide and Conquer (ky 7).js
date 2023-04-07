const divCon = (arr) => {
    let sumInteger = 0;
    let sumStrNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') sumInteger+= arr[i];
        if (typeof arr[i] === 'string') sumStrNumber+= Number(arr[i]);
    }
    return sumInteger - sumStrNumber
}