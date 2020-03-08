const ages = [22, 26, 80, 48, 32]
const youngerThan = ages.filter((e) => {
  return e < 27
})

console.log(youngerThan, 'younger than')
