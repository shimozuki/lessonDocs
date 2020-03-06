const logFirstX = (str, num, i=0) => {
  if (i === 3) return
  console.log(str[i])
  return logFirstX(str, num, i+1)
}

console.log(logFirstX("Winterfell", 3))
