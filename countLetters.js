const countLetters = (word) => {
  let results = {
  }
  for (let letter of word){
    if (results[letter]){
      results[letter] += 1
  } else{
      results[letter] = 1
    }
  }
  return results
}

