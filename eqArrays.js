const assertEqual = function(actual, expected) {
  if (actual === expected){
  console.log(`Assertion Passed: [${actual}] === [${expected}]`)
  }else
  {console.log(`Assertion Failed: [${actual}] !== [${expected}]`)}
};


const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++){
    let num1 = arr1[i];
    if (num1 !== arr2[i]){
      return false
    }
  }
  return true
}


console.log(eqArrays([1,2,3],[1,2,3]))
console.log(eqArrays([1,2,3],[1,2,4]))
console.log(eqArrays([1,2,3],[1,2,"3"]))