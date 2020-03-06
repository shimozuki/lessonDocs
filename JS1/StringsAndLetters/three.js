const lastX = (str, num, i=str.length - num, res='') => {
  if (i === str.length) return res
  return lastX(str, num, i+1, res + str[i])
}

console.log(lastX("Winterfell", 3))
