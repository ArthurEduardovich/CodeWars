const arrayMadness = (a, b) => {
    const resultA = a.reduce((acc,el) => acc+= el ** 2, 0);
    const resultB = b.reduce((acc,el) => acc+= el ** 3, 0);
    return resultA > resultB;
}