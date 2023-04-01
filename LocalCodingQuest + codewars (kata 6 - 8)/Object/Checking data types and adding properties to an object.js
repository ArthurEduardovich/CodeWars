// 1
function addItems(firstName, lastName, age, isStudent){
  const obj = {};
  if(typeof firstName === 'string') obj.firstName = firstName;
  if(typeof lastName === 'string') obj.lastName = lastName;
  if(typeof age === 'number') obj.age = age;
  if(typeof isStudent === 'boolean') obj.isStudent = isStudent;
  return obj;
};

// 2
function keyInObject(obj,key1,key2,key3){
  const objectResult = {};
  obj.hasOwnProperty(key1)? objectResult.key1 = true: objectResult.key1 = false;
  obj.hasOwnProperty(key2)? objectResult.key2 = true: objectResult.key2 = false;
  obj.hasOwnProperty(key3)? objectResult.key3 = true: objectResult.key3 = false;
  return objectResult;
};
console.log(keyInObject({ make: "Ford", year: 2020, color: "blue" }, "make", "model", "year"));

// 3
function bankTransaction(name, balance){
  let nameClient = name['name'];
  let totalDeposit = 0;
  if (balance.type === 'deposit'){
    totalDeposit = name.balance + balance.amount;
  }
  if (balance.type === 'withdrawal' && balance.amount <= name.balance){
    totalDeposit = name.balance - balance.amount;
  }
  if (balance.type === 'withdrawal' && balance.amount > name.balance){
    return `Error: ${nameClient} has insufficient funds`;
  }
 return `Success: ${nameClient} has a balance of ${totalDeposit}`
}
console.log(bankTransaction({ name: "John Smith", balance: 5000 }, { type: "deposit", amount: 2000 }))
console.log(bankTransaction({ name: "John Smith", balance: 5000 }, { type: "withdrawal", amount: 6000 }))





