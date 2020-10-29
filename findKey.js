
const findKey = (obj, callback) => {
  for(let key in obj){
   //console.log(key)
    if (callback(obj[key])){
      return key
    } 
  };
}

let valueFinder = (key) => {
  for(let itam in key){
    if(key[itam] === 2){
      return true
    }
  }
}




let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 1 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};



const assertEqual = function(actual, expected) {
  if (actual === expected){
  console.log(`Assertion Passed: [${actual}] === [${expected}]`)
  }else
  {console.log(`Assertion Failed: [${actual}] !== [${expected}]`)}
};

//console.log(findKey(object, valueFinder))
assertEqual(findKey(object, valueFinder),'Ora' )