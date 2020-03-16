const characters = [{name: "ironman"}, {name: "spiderman"}, {name: "hulk"}]

const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong"
}

const addDescriptions = (arr, obj) => {
  return arr.map((e) => {
    e['description'] = obj[e.name]
    return e
  })
}

console.log(addDescriptions(characters, info))
  
