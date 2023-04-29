function createPhoneNumber(numbers){
        const one = [];
        const two = [];
        const three = [];
        for (let i = 0; i < numbers.length; i++) {
            if (i <= 2) one.push(numbers[i]);
            if (i <= 5 && i > 2) two.push(numbers[i]);
            if (i <= 9 && i > 5) three.push(numbers[i]);
        };
        return `(${one.join('')}) ${two.join('')}-${three.join('')}`;
    };
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

function createPhoneNumber2 (numbers) {
    let format = '(xxx) xxx-xxxx';
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
};

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))