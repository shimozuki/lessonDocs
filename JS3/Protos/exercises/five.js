Array.prototype.getMostCommon = function() {
  const result = this.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})


  const entries = Object.entries(result)
  let max = 0
  let common = null

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i]

    if (value > max) {
      max = value
      common = key
    }
  }

   console.log(result, 'res')
   return common
}

const a = [9, 8, 7, 8, 7, 7, 7].getMostCommon()
const b = ["Batman", 8, 7, "Batman", "Robin"].getMostCommon()

console.log(a, 7)
console.log(b, "Batman")

