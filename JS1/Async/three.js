const solution = (str, i=0) => {
  if (i === str.length) return
  setTimeout(() => {
    console.log(str[i])
  return solution(str, i+1)
  }, 1000)
}

console.log(solution("hello"))
