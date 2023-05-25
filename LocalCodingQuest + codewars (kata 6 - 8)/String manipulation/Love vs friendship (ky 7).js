function wordsToMarks(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let resultSum = 0;
    for (const el of string) {
      resultSum+= alphabet.indexOf(el) + 1;
    }
    return resultSum;
  }