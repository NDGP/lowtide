const assertEqual = require('./assertEqual');

const eqArraysEquals = (arr1, arr2) => {
  let result = true
  for (let i = 0; i < arr1.length; i++){
    let num1 = arr1[i];
    if (num1 !== arr2[i]){
      result = false
    }
  }
  assertEqual(result, true)
}

module.exports = eqArraysEquals
