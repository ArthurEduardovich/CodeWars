// Гипотенуза прямоугольного треугольника.
function hypotenuse(a, b) {
    // Теорема Пифагора - c² = a² + b²
    let c = Math.ceil((Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))));
    return c;
}
console.log(hypotenuse(3, 5));