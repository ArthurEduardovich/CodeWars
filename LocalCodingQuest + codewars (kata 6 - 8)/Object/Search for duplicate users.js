function isDuplicate(profileSaved, profileNew){

    let result = 0;

    let phone1 = 
        (profileNew['phone'][0].trim() === '+')? profileNew['phone'].trim(): `+${profileNew['phone'].trim()}`
    let phone2 =
        (profileSaved['phone'][0].trim() === '+')? profileSaved['phone'].trim(): `+${profileSaved['phone'].trim()}`

    if (profileNew['firstName'].trim().toUpperCase() === profileSaved['firstName'].trim().toUpperCase()){
        result++;
    };
    if (profileNew['lastName'].trim().toUpperCase() === profileSaved['lastName'].trim().toUpperCase()){
        result++;
    };
    if (phone1 === phone2){
        result++;
    };
    if (profileNew['city'].trim().toUpperCase() === profileSaved['city'].trim().toUpperCase()){
        result++;
    }
    return result === 4? true: false; 
};
console.log(isDuplicate({firstName: " Alex ", lastName: " Doe", phone: "+4234567890", city: "Miami"}, {firstName: " john ", lastName: " DOE", phone: " 4234567890 ", city: " MIAMI "}))
console.log(isDuplicate({firstName: " JohN ", lastName: " Doe", phone: "+4234567890", city: "Miami"}, {firstName: " john ", lastName: " DOE", phone: " 4234567890 ", city: " MIAMI "}))