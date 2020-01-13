const listFiles = () => {
  const fs = require('fs')
  fs.readdir('./', (err, files) => {
    const str = files.reduce((acc, f) => {
      return `${acc}<h1>${f}</h1>`
    })
    fs.writeFile('./files.html', str, () => {})
  }, '')
}

