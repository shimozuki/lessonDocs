const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong"
}

const longestString = (obj, res='') => {
  const values = Object.values(obj)
  values.forEach((e) => {
    if (e.length > res.length) {
      res = e
    }
  })
  return res
}

const result = longestString(info)
console.log(result, 'result')
