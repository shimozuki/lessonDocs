const snacks = {
  nutella: () => {
    return 200
  },
  pixyStix: () => {
    return 9
  },
  lays: () => {
    return 135
  }
}

let calories = snacks['nutella']()
console.log(calories, 'calories')
console.log(200)
console.log(" ")

calories = snacks['pixyStix']()
console.log(calories, 'calories')
console.log(9)
console.log(" ")

calories = snacks['lays']()
console.log(calories, 'calories')
console.log(135)
console.log(" ")
