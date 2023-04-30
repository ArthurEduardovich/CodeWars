function toCsvText(array) {
   let csv = '';
   for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            csv+= array[i].join(',') + '\n'
        } else {
            csv+= array[i].join(',')
        }
   }
   return csv
}
console.log(toCsvText([[1, 2],[2, 1]]))