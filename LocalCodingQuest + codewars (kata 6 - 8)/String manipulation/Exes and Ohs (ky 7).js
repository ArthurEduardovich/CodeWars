function XO(str) {
    let countO = 0;
    let countX = 0;
    for (const el of str){
        if (el.toLowerCase() === 'o' ) countO++;
        if (el.toLowerCase() === 'x') countX++;
        else continue;
    }
    return countO === countX? true: false;
}
console.log(XO('xxOo'));