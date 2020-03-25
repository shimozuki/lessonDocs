const fs = require('fs')

fs.writeFile('./today.txt', 'today is a beautiful day', () => {
  console.log("File written!")
})
