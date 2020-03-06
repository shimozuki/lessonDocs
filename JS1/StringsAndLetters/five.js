const removeLetter = (str, letter, i=0, res='') => {
  if (i === str.length) return res
  if (str[i] !== letter) {
    res += str[i]
  }
  return removeLetter(str, letter, i+1, res)
}

console.log(removeLetter("banana", "a"))
