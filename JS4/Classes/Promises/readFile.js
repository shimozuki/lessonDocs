const fs = require('fs')

const readFile = (str, ) => {
  return new Promise((res, rej) => {
    fs.readFile(filePath, (err, data) => {
      if (err) { return rej(err)}
      res(data)
    })
  })
}

readFile('./test.js').then((data) => {
  console.log(data)
})
