const lannister = (input) => {
  return input
}

const stark = () => {
  return 99
}

let res = stark
console.log(res, '[Function: stark]')

res = lannister(stark)
console.log(res, '[Function: stark]')

res = lannister(stark())
console.log(res, 99)
