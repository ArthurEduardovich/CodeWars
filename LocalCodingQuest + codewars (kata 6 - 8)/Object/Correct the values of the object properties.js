function fixValues(obj){
  if (typeof obj['name'] !== 'string'){
    const newObj = {
      name: obj['age'],
      age: obj['name']
    }
    return newObj;
  }
  if (typeof obj['age'] !== 'number'){
    const newObj = {
      name: obj['name'],
      age: obj['age']
    }
    return newObj;
  }
  else {
    const newObj = {
      name: obj['name'],
      age: obj['age']
    }
    return newObj;
  }
}