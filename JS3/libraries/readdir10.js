const fs = require('fs')
fs.readdir('./', (err, files) => {
  if (err) throw err
  files.forEach((e) => {
    if (e.length > 10) {
      console.log(e)
    }
  })
})
