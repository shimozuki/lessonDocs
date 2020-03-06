const countToMe = (num, i=8) => {
  if (num < 8) return
  if (i > num) return
  console.log(i)
  return countToMe(num, i+1)
}

countToMe(10)
