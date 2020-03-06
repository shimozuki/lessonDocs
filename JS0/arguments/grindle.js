const grindle = () => {
  return 10
}

let wald = (cast) => {
  return cast()
}

let grindlewald = wald(grindle)
console.log(grindlewald, 10) 

wald = (cast) => {
  cast()
}

console.log(wald, '[Function: wald]')

grindlewald = wald(() => {
  return 10
})

console.log(grindlewald, undefined)
