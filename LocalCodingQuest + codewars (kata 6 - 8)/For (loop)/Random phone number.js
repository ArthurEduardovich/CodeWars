function createPhoneNumber(){
  let randomNum = '';
  for (let i = 0; i <= 9; i++){
    randomNum+= Math.trunc((Math.random() * 10));
  }
  return `+1${randomNum}`;
}
console.log(createPhoneNumber());