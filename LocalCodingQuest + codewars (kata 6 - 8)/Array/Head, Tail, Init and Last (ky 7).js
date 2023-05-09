function head(arr){
    return Number(arr.slice(0, 1));
}
function tail(arr){
    return arr.slice(1) || []
}
function init(arr){
    return arr.slice(0, -1) || []
}
function last(arr){
    return Number(arr.slice(arr.length - 1));
}
