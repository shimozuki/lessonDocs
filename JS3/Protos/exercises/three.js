const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong"
}

const result = info.reduce((acc, key, value, i) => {
  return acc + `${key}-${i}-${value},`
}, {})
