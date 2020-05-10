const moment = require('moment')

console.log('hello')
console.log('world')

const a = moment().startOf('day').fromNow()
const b = moment().startOf('week').fromNow()

console.log('a is ', a)
console.log('b is ', b)
