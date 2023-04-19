function findMiddle(str){
    if (str.length % 2 === 0){
      return str[(str.length / 2) - 1] + str[str.length / 2];
    } else if (str.length % 2 === 1) {
      return str[Math.round(str.length / 2) - 1]
    }
  };
  console.log(findMiddle('tes'))

  console.log(Math.round(-8.5))