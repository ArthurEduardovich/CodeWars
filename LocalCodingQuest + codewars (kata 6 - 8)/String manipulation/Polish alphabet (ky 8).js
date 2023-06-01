const correctPolishLetters = (str) => {
  function polish(s) {
    if (s === 'ą') return 'a';
    if (s === 'ć') return 'c';
    if (s === 'ę') return 'e';
    if (s === 'ł') return 'l';
    if (s === 'ń') return 'n';
    if (s === 'ó') return 'o';
    if (s === 'ś') return 's';
    if (s === 'ź') return 'z';
    if (s === 'ż') return 'z';
    else return s;
  }
  return str.replace(/['ąćęłńóśźż']/g, polish);
};
console.log(correctPolishLetters('Wol go pyta: \'Panie chrzaszczu,Po co pan tak brzeczy w gaszczu?\''));
