const runIt = (callback) => {
  return (a, b) => {
    return callback(a, b)
  } 
}

const sub = runIt((a,b) => {
  return a - b
})

let b = sub(3, 20)
console.log(b, -17)

b = sub(11, 2)
console.log(b, 9)
