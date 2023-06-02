const removeVowels = function (str) {
  const strToArr = str.split(' ');
  return strToArr.map(el => el.replace(/[aeiou]/g,'')).join(' ')
};
console.log(removeVowels('jfmdx xhnhvqpp lqwrkwz fjbntjxdn sgvwfjr l'))