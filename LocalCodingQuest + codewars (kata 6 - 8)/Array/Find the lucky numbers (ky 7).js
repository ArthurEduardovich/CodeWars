const filterLucky = (x) => {

    function mofifyX (item){
        const itemToStr = String(item);
        for (let i = 0; i < itemToStr.length; i++){
            if (itemToStr[i] == 7) return true;
            else continue;
        }
    }
    const result = x.filter(mofifyX);
    return result;
}

console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]))