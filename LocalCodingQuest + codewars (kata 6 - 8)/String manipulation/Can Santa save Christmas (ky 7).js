function determineTime(duration){
  let countTime = 0;
  for (let el of duration) {
    let modEl = el.replace(/[^0-9]/g,'')
        for (let i = 0; i < modEl.length; i+= 2){
            if (i === 0) countTime+= +modEl.slice(0, 2);
            if (i === 2) countTime+= +modEl.slice(2, 4) / 60;
            else countTime+= +modEl.slice(-2) / 3600;
        }
  }
  return countTime <= 24;
}
console.log(determineTime(["12:00:00", "12:00:01"]));