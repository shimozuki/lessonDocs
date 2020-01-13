const fs = require('fs')

fs.readdir('./', (err, files) => {
  console.log('files: ', files)
  files.forEach((fileName) => {
    if (fileName.length < 10) {
      console.log('fileName',fileName)
    }
  })
})
