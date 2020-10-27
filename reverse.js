let reverse = (words) => {
  let newString = ''

    for (let i = words.length; i >= 0; i--){
      newString += words[i]
    }
  return newString;
}


reverse('sammy')
