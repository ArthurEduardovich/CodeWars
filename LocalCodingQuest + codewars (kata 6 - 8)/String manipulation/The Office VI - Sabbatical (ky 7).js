function sabb(s, val, happiness){
  const sabbatical = 'sabbatical';
  const checkToS = s.toLowerCase().split('').filter((el) => sabbatical.includes(el)).length;
  return (checkToS + val + happiness) > 22? 'Sabbatical! Boom!':
  'Back to your desk, boy.'
}
console.log(sabb('What do you mean I cant learn to code??', 8, 9));
console.log(sabb('Can I have a sabbatical?', 5, 5));
console.log(sabb('Why are you shouting?', 7, 2));