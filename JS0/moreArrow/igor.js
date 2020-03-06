let points = 0
const igor = () => {
  points = points + 1
  return points
}

let luna = igor
console.log(luna, '[Function: igor]')
luna = igor() + igor()
console.log(luna, 3)

