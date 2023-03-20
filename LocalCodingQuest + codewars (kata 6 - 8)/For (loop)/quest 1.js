  function sumFromNToM(n, m){
    let sum = 0;
    for (let i = n; i <= m; i++){
      sum+= i;
    }
    return sum;
  }
console.log(sumFromNToM(12, 13))