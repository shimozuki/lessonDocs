const fs = require('fs')

const readFiles = (paths) => {
  const results = new Array(paths.length)
  let finished = 0
  return new Promise((r, j) => {
    paths.forEach((path, i) => {
      fs.readFile(path, (err, data) => {
        results[i] = data
        finished = finished + 1
        if (finished === paths.length) {
          r(results)
        }
      })
    })
  })
} 

const a = readFiles([
  "./lib.js",
  "./lib.test.js",
  "~/Documents/notes.txt"
]).then((data) => {
  console.log(data[0])
  console.log(data[1])
  console.log(data[2])
})

console.log(a)
