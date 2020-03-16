const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

const headers = (obj, res='') => {
  const entries = Object.entries(obj)
  entries.forEach((e) => {
    const [key, value] = e
    res += `<div><h1>${key}: ${value}</h1></div>`
  }) 
  return res
}

const result = headers(info) 
console.log(result)
