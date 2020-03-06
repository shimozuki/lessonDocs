const secretCodeGenerator = (str, letter, replace, i=0, res='') => {
  if (i === str.length) return res 
  if (str[i] === letter) {
    res += replace 
  } else {
    res += str[i]
  }
    return secretCodeGenerator(str, letter, replace, i+1, res)
}

console.log(secretCodeGenerator("banana", "a", "*z*"))
