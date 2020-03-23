const myObj = require('./helper1.js')
const myArr = require('./helper2.js')
const myFun = require('./myFun.js')
const newObj = require('./myObj.js')

const result = myArr.filter((e) => {
  return myObj.getData(e)
})

const sum = myFun() + newObj 

console.log('result', result)
