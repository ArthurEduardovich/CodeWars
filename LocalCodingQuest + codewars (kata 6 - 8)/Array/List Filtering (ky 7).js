function filter_list (arr){
    const resultArr = arr.filter((el) => {
        return typeof el == 'string';
    })
    return resultArr;
}