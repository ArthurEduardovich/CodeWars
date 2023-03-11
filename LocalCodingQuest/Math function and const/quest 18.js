// Периметр и площадь прямоугольника (заданы координаты противоположных вершин).
const rectangle = (x1, y1, x2, y2) => {
   const a = () => Math.abs(x1 - x2);
   const b = () => Math.abs(y1 - y2);
   const perimeter = () => (a() + b()) * 2;
   const area = () => a() * b();
   return [perimeter(), area()];
}
console.log(rectangle(1, 2, 5, 8));