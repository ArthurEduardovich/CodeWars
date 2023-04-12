function consecutive (arr, a, b){
    if ( (arr.indexOf(a) - arr.indexOf(b)) === 1 || (arr.indexOf(a) - arr.indexOf(b)) === -1){
        return true;
    } else {
        return false;
    }
}