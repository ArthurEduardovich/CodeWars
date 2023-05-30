const tailSwap = (arr) => {
  const oneIndex = arr[0].indexOf(':');
  const twoIndex = arr[1].indexOf(':');
  return [
    `${arr[0].slice(0, oneIndex)}${arr[1].slice(twoIndex)}`,
    `${arr[1].slice(0, twoIndex)}${arr[0].slice(oneIndex)}`,
  ];
};
console.log(tailSwap(['abc:123', 'cde:456'])); // ['abc:456', 'cde:123']
