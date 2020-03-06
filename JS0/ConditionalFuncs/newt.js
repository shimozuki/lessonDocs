const newt = (x) => {
  if (x === 5) {
    return 13
  }
  return x + 1
}

let tonks = newt(3)
console.log(tonks, 4)
tonks = newt(11)
console.log(tonks, 12)
tonks = newt(5)
console.log(tonks, 13)
