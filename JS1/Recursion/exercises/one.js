const love = (i=0) => {
  if (i === 100) return
  console.log("The things I do for love")
  return love(i+1)
}

love()
