function unique(arr){
    return arr.filter((el,i) => {
        if (i == arr.indexOf(el) && i == arr.lastIndexOf(el)) return true;
    })
};