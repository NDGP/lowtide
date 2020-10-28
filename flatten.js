const flatten = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      let insideArr = arr[i];
      for (let k = 0; k < insideArr.length; k++){
        newArr.push(insideArr[k]);
      }
    }else{newArr.push(arr[i])}
  }
  return newArr
}


console.log(flatten([1, 2, [3, 4], 5, [6]]))