const logOddOnly = (str, i=0) => {
  if (i === str.length) return
  if (i % 2 !== 0) {console.log(str[i])}
  return logOddOnly(str, i+1)
}

console.log(logOddOnly("catelyn"))
