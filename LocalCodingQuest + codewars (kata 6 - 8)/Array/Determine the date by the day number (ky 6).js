function getDay (day, isLeap) {
    const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (isLeap === true) {
        arr[1] = 29;
    }

    let index = 0;
    let sum = day;
    for (let i = 0; i < arr.length; i++){
            if (sum > arr[i]){
             sum-= arr[i];
            } else {
                index = i;
                break;
            }
        }
        return `${arrMonth[index]}, ${(sum)}`;
    }