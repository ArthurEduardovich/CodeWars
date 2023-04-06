function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let el of arrayOfSheep){
        if (el) count++;
    }
    return count;
  }
  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))