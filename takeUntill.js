const takeUntil = function(array, callback) {
  let arr = [];
  for (let num in array){
    if (callback(array[num]) === false){
      arr.push(array[num])
    }else{break}
  }   
  return arr
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);