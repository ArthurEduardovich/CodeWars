

const ownedCatAndDog = (catYear, dogYears) => {
    let cat = 0;
    let dog = 0;
    if (catYear < 15) {
        cat = 0;
    } else if (catYear >= 15 && catYear < 24 ) {
        cat = 1;
    } else {
        cat = ((catYear - 24) / 4) + 2;
    }

    if (dogYears < 15) {
        dog = 0;
    } else if (dogYears >= 15 && dogYears < 24 ) {
        dog = 1;
    } else {
        dog = ((dogYears - 24) / 5) + 2;
    }
    return [Math.floor(cat), Math.floor(dog)];
}

