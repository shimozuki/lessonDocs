const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

const filterNonKeys = (arr, obj) => {
  return arr.filter((e) => {
    return obj[e]
  })
}

const avengers = ["ironman", "strange", "thor", "spiderman", "hulk"]
const result = filterNonKeys(avengers, info)


console.log(result, 'result')
