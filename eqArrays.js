
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++){
    let num1 = arr1[i];
    if (num1 !== arr2[i]){
      return false
    }
  }
  return true
}

module.exports = eqArrays

