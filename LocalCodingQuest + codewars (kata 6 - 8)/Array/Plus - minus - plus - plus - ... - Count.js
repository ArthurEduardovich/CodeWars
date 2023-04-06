    const catchSignChange = arr => {
        let count = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] < 0 && arr[i + 1] >= 0) count++;
            if (arr[i] >= 0 && arr[i + 1] < 0) count++;
            if (arr[i] === arr[i + 1]) count;
        }
        return count;
    }

console.log(catchSignChange([1, -3, -4, 0, 5]));