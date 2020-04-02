const fs = require('fs')

const readFiles = (paths) => {
  const result = new Array(paths.length)
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

readFiles([
'./lib.js', 
'./lib.test.js', 
'~/Documents/notes.txt'
]).then(data => {
  console.log(data[0]); // file contents from lib.js
  console.log(data[1]); // file contents from lib.test.js
  console.log(data[2]); 
  // file contents from ~/Documents/notes.txt
});
// Make sure you are resolving in the same order!
