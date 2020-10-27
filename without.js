// const eqArrays = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++){
//     let num1 = arr1[i];
//     if (num1 !== arr2[i]){
//       return `Assertion Failed`
//     }
//   }
//   return `Assertion Passed`
// }


const without = (arr1, arr2) => {
  let newSet = [];

  for (let i = 0; i < arr1.length; i++){
    let num1 = arr1[i];
      if (num1 !== arr2[i]){
        newSet.push(num1);
      }
  }
  return newSet
}



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
