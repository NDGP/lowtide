const middle = (arr) => {
  midArr = [];
  if (arr.length % 2 === 0 && arr.length > 2){
    midArr.push(arr[(arr.length/2) - 1])
    midArr.push(arr[arr.length/2]);
  }else if(arr.length % 2 !== 0 && arr.length > 2){
    midArr.push(arr[Math.floor(arr.length/2)])
  }
  return midArr
}  

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
      return `Assertion Failed`
    }
  }
  return `Assertion Passed`
}
