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

const assertObjectsEqual = function(actual, expected) {
 if (eqObjects(actual, expected) !== true){
   console.log(`Assertion Failed: [object1] !== [object2]`)
 }else{
   console.log(`Assertion Passed: [object1] === [object2]`)
 }
};

//console.log(`Example label: ${inspect(actual)}`);


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));