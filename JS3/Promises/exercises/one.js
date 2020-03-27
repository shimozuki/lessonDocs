const axios = require('axios')
const fs = require('fs')
const allData = []

axios('https://c0d3.com/api/lessons').then((payload) => {
 const htmlData = payload.data.reduce((acc, curr) => {
   acc += `
   <h1>${curr.title}</h1>
   `
   return acc
 }, '') 

  fs.writeFile('one.html', htmlData, () => {
    console.log("one.html has been written!")
  })
})


