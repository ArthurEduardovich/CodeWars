function fix(paragraph) {
  if (!paragraph) return paragraph;
  const paragraphToArr = paragraph
    .split('. ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join('. ');
  return paragraphToArr;
}
console.log(fix('')); // "Hello. My name is inigo montoya. You killed my father. Prepare to die."
