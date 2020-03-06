const logNonMatching = (str1, str2, i=0) => {
  if (i === str1.length) return
  if (str1[i] !== str2) {
    console.log(str1[i])
  }
  return logNonMatching(str1, str2, i+1)
}

console.log(logNonMatching("banana", "a"))
