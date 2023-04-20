const addTitleString = (names) => {

    if (names.length !== 3) return "Invalid input";

    const resultNames = [];
    resultNames.push(names[0].trim());
    resultNames.push(names[1].trim());
    resultNames.push(names[2].trim());
    resultNames.push(`${names[0].trim()} ${names[1].trim()} ${names[2].trim()}`)
    return resultNames;
}   

