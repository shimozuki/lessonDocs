const fs = require('fs')

const readFile = (filePath) => {
  return new Promise((res, rej) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return rej(err)
      }
      res(data)
    })
  })
}

readFile('./test.js').then((data) => {
  console.log(data)
})
