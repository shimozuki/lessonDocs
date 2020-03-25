const fs = require('fs');
const listFiles = () => {
  fs.readdir(
    './',
    (err, files) => {
      if (err) throw err;
      const str = files.reduce((acc, f) => {
        return `${acc}<h1>${f}</h1>`;
        }, '');

        fs.writeFile('./files.html', str, () => {
          if (err) throw err;
          console.log('File has been written!');
      });
    })
};

listFiles()
