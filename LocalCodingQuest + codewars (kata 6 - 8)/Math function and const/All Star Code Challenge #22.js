const toTime = (s) => {
  const calcSecToHours = () => Math.floor(s / 3600);
  const calcSecToMin = () => Math.floor(((s / 3600) - calcSecToHours()) * 60);
  return `${calcSecToHours()} hour(s) and ${calcSecToMin()} minute(s)`
}
console.log(toTime(323500))

