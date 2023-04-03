function isDuplicate(obj1, obj2){
    let count = 0;

    let phone1Modify =
        obj1['phone'].trim()[0] === '+'? obj1['phone'].trim(): `+${obj1['phone'].trim()}`;
    let phone2Modify =
        obj2['phone'].trim()[0] === '+'? obj2['phone'].trim(): `+${obj2['phone'].trim()}`;

    if (obj1['firstName'].trim().toUpperCase() === obj2['firstName'].trim().toUpperCase()){
        count++;
    };
    if (obj1['lastName'].trim().toUpperCase() === obj2['lastName'].trim().toUpperCase()){
        count++;
    };
    if (obj1['city'].trim().toUpperCase() === obj2['city'].trim().toUpperCase()){
        count++;
    };
    if (phone1Modify === phone2Modify){
        count++;
    }
    return count >= 2? true: false;
}