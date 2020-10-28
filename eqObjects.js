const assertEqual = function(actual, expected) {
  if (actual === expected){
  console.log(`Assertion Passed: [${actual}] === [${expected}]`)
  }else
  {console.log(`Assertion Failed: [${actual}] !== [${expected}]`)}
};

const eqObjects = function(object1, object2) {
  let arrKeys = Object.keys(object2)
  let arrValues = Object.values(object2)
  
  if (Object.keys(object1).length !== arrKeys.length){
    return false
  }

  for (let keys of arrKeys){
    //console.log(keys)
    if (object1[keys]){
      return true
    }
  }
  for (let key in object1){
    for (let values of arrValues){
      //console.log(key)
      if(object1[key] === arrValues[values]){
        return true
      }
    }
  }
  return false
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));
