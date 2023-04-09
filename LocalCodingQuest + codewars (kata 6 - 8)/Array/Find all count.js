const allNonConsecutive = function (arr) {
        let value = arr[1] - arr[0]; // диапозон возрастания чисел (порядок)

        let resultArr = [];

        for (let i = 0; i < arr.length; i++) {
            if ( (arr[i + 1] - arr[i]) > 1){
                resultArr.push({i: i + 1, n: arr[i + 1]})
            }
        }
        return resultArr
 }
 console.log(allNonConsecutive([ 13, 15, 16, 18, 19, 20 ])) // 
 console.log(allNonConsecutive([1,2,3,4,6,7,8,10])) 
 console.log(allNonConsecutive([ 6, 8, 9, 10, 11, 13, 14, 15 ]))