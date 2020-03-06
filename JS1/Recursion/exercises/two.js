const countTo98 = (i=0) => {
  if (i === 100) return
  console.log(i)
  return countTo98(i+1)
}

countTo98()
