const assertEqual = function(actual, expected) {
  if (actual === expected){
  console.log(`Assertion Passed: [${actual}] === [${expected}]`)
  }else
  {console.log(`Assertion Failed: [${actual}] !== [${expected}]`)}
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1) === Object.keys(object2) && Object.values(object1) === Object.values(object2)){
    console.log(`Assertion Passed: [object1] === [object2]`)
  }else{
    console.log(`Assertion Failed: [object1] !== [object2]`)
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);