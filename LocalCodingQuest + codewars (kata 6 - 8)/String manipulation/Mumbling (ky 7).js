function accum(s) {
	let result = '';
    for (let i = 0; i < s.length; i++){
        if (i !== s.length - 1) result+= s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-';
        else result+= s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
  }
  return result;
}
console.log(accum('ZpglnRxqenU'));