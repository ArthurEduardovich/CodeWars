function doubles(s) {
    let chars = s.split(""); // преобразуем строку в массив символов
    let i = 0;
    while (i < chars.length - 1) {
      if (chars[i] === chars[i+1]) {
        chars.splice(i, 2); // удаление символов с индексами i и i+1
        i = Math.max(0, i-1); // сдвигаем указатель i на одну позицию влево
      } else {
        i += 1;
      }
    }
    return chars.join(""); // преобразование массива символов в строку
  }
  
 
console.log(doubles('zzzzykkkdd')); // yk
console.log(doubles('rrrmooomqqqqj')); // rmomj