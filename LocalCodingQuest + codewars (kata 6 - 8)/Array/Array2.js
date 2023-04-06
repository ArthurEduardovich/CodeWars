// 1
const aboveAverageScore = (arr) => {

    const calcMediumScore = () => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum+= arr[i]
        }
        return (sum / arr.length);
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > calcMediumScore()) count++;
        continue;
    }
    return count;
}

// console.log(aboveAverageScore([3, 4, 5]))

// 2
