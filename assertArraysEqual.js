const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++){
    let num1 = arr1[i];
    if (num1 !== arr2[i]){
      return `Assertion Failed`
    }
  }
  return `Assertion Passed`
}


console.log(eqArrays([1,2,3],[1,2,3]))
console.log(eqArrays([1,2,3],[1,2,4]))
console.log(eqArrays([1,2,3],[1,2,"3"]))