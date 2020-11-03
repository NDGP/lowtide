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

//console.log(middle([1,2,3,4,5]))
module.exports = middle



