let points = 0
const draco = (kreacher, winky, fluffy) => {
  points = kreacher + winky
  return points + fluffy
}

const malfoy = draco(1,2,3) + draco(3,2,1)
console.log(malfoy, 12)
