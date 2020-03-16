const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

const headers = (obj, res='') => {
  const entries = Object.entries(obj)
  entries.forEach((e) => {
    const [key, value] = e
    res += `<h1>${key}</h1>`
  }) 
  return res
}

const result = headers(info) 
console.log(result)
