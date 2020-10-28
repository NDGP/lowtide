const letterPosition = (sentence) => {
  let results = {}

    for (let i = 0; i < sentence.length; i++){
      let letters = sentence[i]
      if (letters === " "){
        continue
      }
      if (results[letters]){
        results[letters].push(i)
      }else{
        results[letters] = [i]
        console.log("added", letters)
      }
     }
   return results
}


console.log(letterPosition("lighthouse in the house"))