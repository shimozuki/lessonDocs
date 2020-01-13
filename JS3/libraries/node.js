const makeFiles = () => {
const fs = require('fs');
  const solution = (n, i=0) => {
    if (i > n) return
  fs.writeFile('./today.txt', 'today is a beautiful day', () => {})
    return solution(n, i+1)
  }
};
// This will create a file called today.txt in the same folder
//     When you open the file, it will say 'today is a beautiful day'
